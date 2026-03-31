import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LEADERBOARDS = {
    Racing: [
        { id: 1, rank: 1, player: "SpeedDemon", score: 9800, date: "Oct 24, 2026" },
        { id: 2, rank: 2, player: "DriftKing", score: 8500, date: "Oct 23, 2026" },
        { id: 3, rank: 3, player: "FastRider", score: 7200, date: "Oct 22, 2026" },
        { id: 4, rank: 4, player: "TurboX", score: 6500, date: "Oct 20, 2026" },
        { id: 5, rank: 5, player: "RacerOne", score: 5400, date: "Oct 19, 2026" },
        { id: 6, rank: 6, player: "WheelSpin", score: 4800, date: "Oct 18, 2026" },
    ],
    Action: [
        { id: 7, rank: 1, player: "NinjaStrike", score: 10500, date: "Oct 25, 2026" },
        { id: 8, rank: 2, player: "WarriorX", score: 9200, date: "Oct 24, 2026" },
        { id: 9, rank: 3, player: "SwordMaster", score: 8100, date: "Oct 22, 2026" },
        { id: 10, rank: 4, player: "BlastBoy", score: 7500, date: "Oct 21, 2026" },
        { id: 11, rank: 5, player: "GunSlinger", score: 6800, date: "Oct 18, 2026" },
        { id: 12, rank: 6, player: "HeroZero", score: 5500, date: "Oct 15, 2026" },
    ],
    Puzzle: [
        { id: 13, rank: 1, player: "Brainiac", score: 12000, date: "Oct 26, 2026" },
        { id: 14, rank: 2, player: "LogicPro", score: 11500, date: "Oct 25, 2026" },
        { id: 15, rank: 3, player: "PuzzleGuru", score: 9800, date: "Oct 22, 2026" },
        { id: 16, rank: 4, player: "MindGames", score: 9200, date: "Oct 21, 2026" },
        { id: 17, rank: 5, player: "SolverX", score: 8900, date: "Oct 20, 2026" },
        { id: 18, rank: 6, player: "CubeMaster", score: 8200, date: "Oct 19, 2026" },
    ]
};

const CATEGORIES = ["Racing", "Action", "Puzzle"];

const tableVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
};

const Leaderboard = () => {
    const [activeCategory, setActiveCategory] = useState("Racing");

    const getRankStyles = (rank) => {
        switch (rank) {
            case 1:
                return {
                    bg: "bg-yellow-500/10 border-yellow-500/50",
                    text: "text-yellow-400",
                    glow: "shadow-[0_0_20px_rgba(234,179,8,0.2)]",
                    icon: "🥇"
                };
            case 2:
                return {
                    bg: "bg-slate-300/10 border-slate-300/50",
                    text: "text-slate-300",
                    glow: "shadow-[0_0_15px_rgba(203,213,225,0.1 5)]",
                    icon: "🥈"
                };
            case 3:
                return {
                    bg: "bg-amber-700/10 border-amber-700/50",
                    text: "text-amber-600",
                    glow: "shadow-[0_0_15px_rgba(180,83,9,0.2)]",
                    icon: "🥉"
                };
            default:
                return {
                    bg: "bg-white/5 border-white/5",
                    text: "text-slate-400",
                    glow: "",
                    icon: `#${rank}`
                };
        }
    };

    return (
        <div className="w-full relative z-10 bg-transparent flex flex-col">
            
            {/* 1. Header & Game Selector inline */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3"
                >
                    <span className="material-symbols-outlined text-yellow-400 text-3xl">emoji_events</span>
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">Leaderboard</h2>
                        <p className="text-slate-400 text-sm md:text-base font-medium">Compete with players and reach the top</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex bg-[#0f172a]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] self-start md:self-auto"
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative px-4 py-2 md:px-6 md:py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                                activeCategory === cat 
                                    ? "text-background-dark" 
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="activeCategoryTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary rounded-xl shadow-[0_0_15px_rgba(43,238,121,0.4)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* 2 & 3. Leaderboard Table */}
            <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-6 md:px-8 py-4 border-b border-white/10 text-xs font-bold text-slate-400 uppercase tracking-widest bg-black/20">
                    <div className="col-span-2 text-center md:text-left">Rank</div>
                    <div className="col-span-5 md:col-span-4">Player</div>
                    <div className="col-span-5 md:col-span-3 text-right md:text-left">Score</div>
                    <div className="col-span-12 md:col-span-3 text-center md:text-right hidden md:block">Date</div>
                </div>

                {/* Table Body */}
                <div className="overflow-x-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            variants={tableVariants}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="flex flex-col p-4 md:p-6 gap-3"
                        >
                            {LEADERBOARDS[activeCategory].map((entry) => {
                                const styles = getRankStyles(entry.rank);
                                
                                return (
                                    <motion.div
                                        key={entry.id}
                                        variants={rowVariants}
                                        whileHover={{ scale: 1.01, x: 5 }}
                                        className={`grid grid-cols-12 gap-4 items-center px-4 md:px-6 py-4 rounded-2xl border ${styles.bg} ${styles.glow} transition-all duration-300 group hover:border-primary/50 hover:bg-primary/5`}
                                    >
                                        {/* Rank */}
                                        <div className="col-span-2 flex items-center justify-center md:justify-start">
                                            <div className={`text-xl md:text-2xl font-black ${styles.text}`}>
                                                {styles.icon}
                                            </div>
                                        </div>

                                        {/* Player */}
                                        <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 hidden sm:flex items-center justify-center shadow-inner overflow-hidden">
                                                <img 
                                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${entry.player}&backgroundColor=b6e3f4`}
                                                    alt="avatar"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="font-bold text-white group-hover:text-primary transition-colors text-sm md:text-base truncate">
                                                {entry.player}
                                            </span>
                                        </div>

                                        {/* Score */}
                                        <div className="col-span-5 md:col-span-3 text-right md:text-left">
                                            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 group-hover:from-blue-400 group-hover:to-primary transition-all text-base md:text-lg">
                                                {entry.score.toLocaleString()}
                                            </span>
                                            <span className="text-slate-500 text-xs ml-1 md:hidden block mt-1">{entry.date}</span>
                                        </div>

                                        {/* Date */}
                                        <div className="col-span-12 md:col-span-3 text-right hidden md:block">
                                            <span className="text-slate-400 text-sm font-medium">
                                                {entry.date}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
