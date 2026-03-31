/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Leaderboard from '../components/Leaderboard';

const MOCK_FAVORITES = [
    { id: 1, title: "Neon Cyber Rider", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop", rating: 4.8 },
    { id: 2, title: "Galactic Wars", thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop", rating: 4.5 },
    { id: 3, title: "Sword of Destiny", thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2165&auto=format&fit=crop", rating: 4.9 },
    { id: 4, title: "Speed Devils", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop", rating: 4.2 }
];

const MOCK_RECENT = [
    { id: 5, title: "Arena Legends", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", rating: 4.7 },
    { id: 6, title: "Mystic Quest", thumbnail: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2000&auto=format&fit=crop", rating: 4.6 },
    { id: 7, title: "Urban Fighter", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop", rating: 4.3 },
    { id: 8, title: "Zombie Survival", thumbnail: "https://images.unsplash.com/photo-1519068737630-e5db30e12e42?q=80&w=2000&auto=format&fit=crop", rating: 4.4 }
];

const STATS = [
    { label: "Total Games Played", value: "25", icon: "sports_esports" },
    { label: "Favorite Games Count", value: "10", icon: "favorite" },
    { label: "Total Play Time", value: "5 hours", icon: "schedule" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const UserDashboardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-16 relative overflow-hidden flex flex-col">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-16">
                
                {/* 1. Profile Section */}
                <motion.section 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md w-full relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 text-center shadow-[0_0_30px_rgba(43,238,121,0.05)] hover:shadow-[0_0_40px_rgba(43,238,121,0.15)] text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-blue-500 to-primary mb-6 shadow-lg shadow-primary/20">
                                <img 
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" 
                                    alt="User Avatar" 
                                    className="w-full h-full rounded-full object-cover bg-slate-800"
                                />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                                Player One
                            </h2>
                            <p className="text-slate-400 font-medium flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">mail</span>
                                player.one@awongames.com
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 2. Stats Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STATS.map((stat, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#0f172a]/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                                        <h3 className="text-4xl font-black text-white group-hover:text-primary transition-colors">
                                            {stat.value}
                                        </h3>
                                    </div>
                                    <div className="w-14 h-14 rounded-xl bg-slate-800/80 flex items-center justify-center border border-white/5 group-hover:border-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">
                                            {stat.icon}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 3. Favorite Games Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                        <h2 className="text-3xl font-bold text-white tracking-tight">Your Favorite Games</h2>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                    >
                        {MOCK_FAVORITES.map((game) => (
                            <motion.div key={game.id} variants={itemVariants}>
                                <GameCard 
                                    title={game.title}
                                    thumbnail={game.thumbnail}
                                    rating={game.rating}
                                    gameUrl={`/games/${game.id}`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* 4. Recently Played Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-blue-400 text-3xl">history</span>
                        <h2 className="text-3xl font-bold text-white tracking-tight">Recently Played</h2>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                    >
                        {MOCK_RECENT.map((game) => (
                            <motion.div key={game.id} variants={itemVariants}>
                                <GameCard 
                                    title={game.title}
                                    thumbnail={game.thumbnail}
                                    rating={game.rating}
                                    gameUrl={`/games/${game.id}`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* 5. My Collections Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants} className="flex items-center justify-between gap-3 mb-8 flex-wrap">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>collections_bookmark</span>
                            <h2 className="text-3xl font-bold text-white tracking-tight">My Collections</h2>
                        </div>
                        <motion.button
                            onClick={() => navigate('/collections')}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/20 transition-all"
                        >
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                            View All Collections
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {[
                            { id: 'top-rated',   label: 'Top Rated Games',     icon: 'workspace_premium', gradient: 'from-yellow-500 to-orange-500', count: 4 },
                            { id: 'brain-teasers', label: 'Best Puzzle Games', icon: 'psychology',         gradient: 'from-purple-500 to-blue-500',  count: 4 },
                            { id: 'quick-play',  label: 'Quick Play Picks',    icon: 'bolt',               gradient: 'from-blue-400 to-cyan-400',    count: 4 },
                        ].map((col) => (
                            <motion.div
                                key={col.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, y: -4 }}
                                onClick={() => navigate('/collections')}
                                className="group cursor-pointer bg-[#0f172a]/60 backdrop-blur-md rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden relative"
                            >
                                <div className={`h-1 w-full bg-gradient-to-r ${col.gradient}`} />
                                <div className="p-6 flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${col.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{col.icon}</span>
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <h3 className="font-bold text-white group-hover:text-primary transition-colors truncate">{col.label}</h3>
                                        <p className="text-slate-500 text-sm mt-0.5">{col.count} games saved</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">chevron_right</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* 6. Leaderboard Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <Leaderboard />
                </motion.section>

            </div>
        </div>
    );
};

export default UserDashboardPage;
