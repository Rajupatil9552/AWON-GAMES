import React from 'react';
import { Link } from 'react-router-dom';

const BlogHero = () => {
    return (
        <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
                <div className="space-y-2">
                    <span className="text-accent-blue font-bold tracking-[0.2em] uppercase text-sm">Latest News</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">The <span className="text-primary neon-text-shadow">Awon</span> Bulletin</h1>
                </div>
                <div className="flex gap-2">
                    <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all">
                        <span className="material-symbols-outlined">filter_list</span>
                    </button>
                    <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </div>
            </div>
            <Link to="/blog/featured" className="block relative group h-[500px] rounded-lg overflow-hidden border border-white/10 card-hover-glow transition-all duration-500">
                <img alt="Cyberpunk city with green neon highlights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_kBzqkEy9OASz9XMtOJLv1OVLqxSWdM8p5CRWU0xDMRItk046TOpc7ZGHivRv5vVw3JDN4z0uY3zEPQbUy-2SKUl_Qoh9TWR2tA5DqZEW953cwBMlrmAodWqt1r4mvOHWZSYDw7OfvrkCre7-_mRL9mmlZUm-Sj7yL_B4n5JJTHWIJaWjhAK9BPZuSfuI9aNwgmIL4CqROR3ZE5gx9a-zmIwUvi3TGRT6dOWCiDHmR1SFn3URO5BbdS4G4dzQwjVzfoh3q4DwAgRX" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-primary text-background-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Featured</span>
                        <span className="text-slate-300 text-sm flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 5 min read</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">Mastering the Neon Streets: A Guide to Cyber Odyssey’s New Expansion</h2>
                    <p className="text-slate-300 text-lg mb-8 line-clamp-2 max-w-2xl">Dive deep into the sprawling metropolis of Neo-Awon with our comprehensive breakdown of every new mechanic, district, and legendary item.</p>
                    <div className="flex items-center gap-6">
                        <span className="bg-primary text-background-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                            Read Story <span className="material-symbols-outlined">arrow_forward</span>
                        </span>
                        <div className="flex items-center gap-3">
                            <img alt="Author avatar" className="w-10 h-10 rounded-full border-2 border-accent-blue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnEUT9pnLMIq61NJYyn3ZReUPvxBjw1QSQ7nSqiYuJ2X00bwk2tBVchTxA-sHmf9TN6xxJvb0-lP7LnpLXHpN3GvNkf8-zAc_A5aClVxAWWDtQ41h7mPplhnfTyOs4bbK29F5Mppu0Q00Joxqd-FX6qJahyuY-XmXR2qYAovwNVpVFy3FlzOGRpeiJhj8FLplsqIiat-dU1o1VuM-68UNRPCFFXhqSg9E4-Da4_AK30Ss-7fzs0jxJDefNC8phfJCkirX3rU7YnTSW" />
                            <div>
                                <p className="text-sm font-bold text-white leading-none">Alex Rivera</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Lead Editor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogHero;
