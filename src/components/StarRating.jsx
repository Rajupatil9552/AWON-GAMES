/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StarRating = ({ rating = 0, onRate = () => {} }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
                const isActive = star <= (hoverRating || rating);
                const isHovered = hoverRating > 0 && star <= hoverRating;

                return (
                    <motion.button
                        key={star}
                        onClick={() => onRate(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="relative p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full group"
                    >
                        {/* Background Neon Glow Effect when active/hovered */}
                        {isActive && (
                            <motion.div
                                className={`absolute inset-0 blur-md rounded-full transition-all duration-300 ${
                                    isHovered ? 'bg-blue-400/50' : 'bg-primary/30'
                                }`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                        
                        <span 
                            className={`material-symbols-outlined text-3xl md:text-4xl relative z-10 transition-colors duration-300 ${
                                isActive 
                                    ? isHovered 
                                        ? 'text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]' 
                                        : 'text-primary drop-shadow-[0_0_10px_rgba(43,238,121,0.6)]' 
                                    : 'text-slate-700'
                            }`}
                            style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                        >
                            star
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
};

export default StarRating;
