import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, NavBody, NavItems, NavbarButton } from "./ui/resizable-navbar";
import logo from '../assets/logo-new-2.png';

const AwonNavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/games?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery(''); // Optional: clear search after submit
            setIsMobileMenuOpen(false); // Close mobile menu if open
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
                    <Link to="/" className="flex items-center gap-2 group z-50">
                        <img src={logo} alt="Awon Games Logo" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </Link>

                    <div className="hidden lg:block">
                        <NavItems items={navItems} />
                    </div>
                </div>

                {/* Search & Profile/Sign In */}
                <div className="flex items-center gap-4 z-50">
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

                    <div className="hidden lg:block">
                        <NavbarButton onClick={() => navigate('/dashboard')}>
                            <span className="material-symbols-outlined text-lg">account_circle</span>
                            <span>Sign In</span>
                        </NavbarButton>
                    </div>

                    {/* Mobile Menu Toggle button */}
                    <button 
                        className="lg:hidden text-white flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </NavBody>

            {/* Mobile dropdown menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full mt-2 bg-[#0c1322] border-y border-primary/20 backdrop-blur-xl shadow-2xl flex flex-col p-4 gap-4 z-40 rounded-b-2xl">
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.label}
                                to={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
                                    item.active ? 'bg-primary/20 text-primary font-medium' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex border-t border-white/10 pt-4 flex-col gap-4">
                        <div className="flex items-center bg-white/5 border border-white/10 focus-within:border-primary/50 rounded-xl px-4 py-2 hover:bg-white/10 transition-all">
                            <span className="material-symbols-outlined text-slate-500">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-slate-500 outline-none ml-2"
                                placeholder="Search games..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit}
                            />
                        </div>
                        <NavbarButton className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); navigate('/dashboard'); }}>
                            <span className="material-symbols-outlined text-lg">account_circle</span>
                            <span>Sign In</span>
                        </NavbarButton>
                    </div>
                </div>
            )}
        </Navbar>
    );
};

export default AwonNavbar;