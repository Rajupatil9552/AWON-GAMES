import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const platformLinks = [
        { label: 'Games', href: '/games' },
        { label: 'Launcher', href: '#' },
        { label: 'Mobile App', href: '#' },
        { label: 'Creators', href: '#' },
    ];

    const supportLinks = [
        { label: 'Help Center', href: '#' },
        { label: 'Safety', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Server Status', href: '#' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
    ];

    return (
        <footer className="border-t border-white/5 bg-background-dark pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-background-dark">
                                <span className="material-symbols-outlined font-bold">sports_esports</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Awon Games</span>
                        </div>
                        <p className="text-slate-400 max-w-xs leading-relaxed">
                            The world's premier platform for indie and AAA gaming. Discover, play, and connect with gamers worldwide.
                        </p>
                        <div className="flex gap-4">
                            <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all border border-white/10">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </Link>
                            <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all border border-white/10">
                                <span className="material-symbols-outlined text-xl">public</span>
                            </Link>
                            <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all border border-white/10">
                                <span className="material-symbols-outlined text-xl">forum</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-4">
                            {platformLinks.map(link => (
                                <li key={link.label}>
                                    <Link className="text-sm text-slate-400 hover:text-primary transition-colors" to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Support</h4>
                        <ul className="space-y-4">
                            {supportLinks.map(link => (
                                <li key={link.label}>
                                    <Link className="text-sm text-slate-400 hover:text-primary transition-colors" to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-4">
                            {legalLinks.map(link => (
                                <li key={link.label}>
                                    <Link className="text-sm text-slate-400 hover:text-primary transition-colors" to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © 2024 Awon Games Inc. All rights reserved. Built for champions.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-slate-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">language</span> English (US)</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1"><span className="material-symbols-outlined text-xs">verified</span> Certified Secure</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
