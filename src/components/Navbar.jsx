import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, NavBody, NavItems, NavbarButton } from "./ui/resizable-navbar";
import logo from '../assets/logo-new-2.png';

const AwonNavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/games?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery(''); // Optional: clear search after submit
        }
    };

    const navItems = [
        { label: 'Games', href: '/games', active: false },
        { label: 'Blog', href: '/blog', active: true },
        { label: 'Promotions', href: '/promotions', active: false },
        { label: 'Categories', href: '/categories', active: false },
    ];

    return (
        <Navbar>
            <NavBody>
                {/* Brand & Links */}
                <div className="flex items-center gap-10">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={logo} alt="Awon Games Logo" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </Link>

                    <NavItems items={navItems} />
                </div>

                {/* Search & Profile/Sign In */}
                <div className="flex items-center gap-4">
                    <div className="hidden xl:flex items-center bg-white/5 border border-white/10 focus-within:border-primary/50 rounded-full px-4 py-1.5 transition-all">
                        <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                        <input
                            className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-600 outline-none text-white ml-2"
                            placeholder="Search games & categories..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchSubmit}
                        />
                    </div>

                    <NavbarButton>
                        <span className="material-symbols-outlined text-lg">account_circle</span>
                        <span>Sign In</span>
                    </NavbarButton>
                </div>
            </NavBody>
        </Navbar>
    );
};

export default AwonNavbar;