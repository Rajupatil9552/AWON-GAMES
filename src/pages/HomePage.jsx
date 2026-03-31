import React from 'react';
import HeroSection from '../components/HeroSection';
import TrendingGamesSection from '../components/TrendingGamesSection';
import DailyChallengeSection from '../components/DailyChallengeSection';

const MainLayoutPage = () => {
    return (
        <main className="flex-grow">
            <HeroSection />

            <div className="bg-background-dark relative border-t border-primary/20 shadow-[0_-10px_30px_rgba(43,238,121,0.05)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                    {/* Trending Games Component Grid */}
                    <TrendingGamesSection />

                    {/* Daily Challenge Section */}
                    <DailyChallengeSection />

                    {/* Secondary Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
                        <aside className="lg:col-span-1 space-y-6">
                            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                <h4 className="font-bold mb-4 text-primary">Top Categories</h4>
                                <ul className="space-y-3">
                                    <li><a className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">rocket_launch</span> Action</a></li>
                                    <li><a className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">strategy</span> Strategy</a></li>
                                    <li><a className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">swords</span> RPG</a></li>
                                    <li><a className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">sports_soccer</span> Sports</a></li>
                                </ul>
                            </div>
                        </aside>
                        <div className="lg:col-span-3 space-y-6">
                            <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2 text-white">Claim Your Weekly Reward</h2>
                                    <p className="text-slate-400">Log in every day to collect shards and unlock legendary skins.</p>
                                </div>
                                <button className="whitespace-nowrap bg-primary text-background-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Claim Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainLayoutPage;
