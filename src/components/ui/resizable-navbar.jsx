/* eslint-disable no-unused-vars */
"use client";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Integrated useLocation
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 50);
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        visible ? "top-4" : "top-0",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, visible, className }) => (
  <motion.div
    animate={{
      width: visible ? "75%" : "100%",
      y: visible ? 0 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 30 }}
    className={cn(
      "mx-auto hidden h-16 max-w-7xl items-center justify-between px-8 lg:flex transition-all",
      visible
        ? "rounded-full border border-primary/20 bg-background-dark/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
        : "border-b border-primary/10 bg-background-dark/90 backdrop-blur-md",
      className
    )}
  >
    {children}
  </motion.div>
);

export const NavItems = ({ items }) => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation(); // Hook to track current URL

  return (
    <nav className="flex items-center gap-1 relative">
      {items.map((item, idx) => {
        // Compare the current URL path with the item's href
        const isActive = location.pathname === item.href;

        return (
          <Link
            key={item.label}
            to={item.href}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-all duration-200",
              // Dynamically apply green text and shadow glow if active
              isActive
                ? "text-primary shadow-[0_2px_0_0_#2bee79]"
                : "text-slate-400 hover:text-white"
            )}
          >
            {hovered === idx && (
              <motion.span
                layoutId="nav-hover-bg"
                className="absolute inset-0 z-0 rounded-full bg-white/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export const NavbarButton = ({ children, className, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-primary text-black shadow-[0_0_15px_rgba(43,238,121,0.4)] hover:shadow-[0_0_25px_rgba(43,238,121,0.6)]",
    secondary: "bg-transparent text-white hover:bg-white/10",
  };
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-full text-sm font-bold transition-all active:scale-95 flex items-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};