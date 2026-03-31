/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';

// --- Curated Collections Definition ---
const COLLECTIONS = [
    {
        id: 'top-rated',
        title: 'Top Rated Games',
        description: 'The highest rated games loved by millions of players worldwide. Only the best make this list.',
        icon: 'workspace_premium',
        gradient: 'from-yellow-500 to-orange-500',
        glowColor: 'rgba(234,179,8,0.3)',
        borderColor: 'border-yellow-500/30',
        games: [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 4)
    },
    {
        id: 'brain-teasers',
        title: 'Best Puzzle Games',
        description: 'Sharpen your mind with our handpicked selection of logic, word, and puzzle challenges.',
        icon: 'psychology',
        gradient: 'from-purple-500 to-blue-500',
        glowColor: 'rgba(168,85,247,0.3)',
        borderColor: 'border-purple-500/30',
        games: GAMES.filter(g => g.category === 'Puzzles').slice(0, 4)
    },
    {
        id: 'multiplayer-madness',
        title: 'Best Multiplayer Games',
        description: 'Challenge your friends or compete with players worldwide in these thrilling multiplayer experiences.',
        icon: 'group',
        gradient: 'from-green-500 to-primary',
        glowColor: 'rgba(43,238,121,0.3)',
        borderColor: 'border-primary/30',
        games: GAMES.filter(g => ['Sports', '3D', 'Arcade'].includes(g.category)).slice(0, 4)
    },
    {
        id: 'quick-play',
        title: 'Quick Play Picks',
        description: 'Jump right in! These hypercasual games are perfect for a fun break with no learning curve.',
        icon: 'bolt',
        gradient: 'from-blue-400 to-cyan-400',
        glowColor: 'rgba(96,165,250,0.3)',
        borderColor: 'border-blue-400/30',
        games: GAMES.filter(g => g.category === 'Hypercasual').slice(0, 4)
    },
    {
        id: 'great-adventures',
        title: 'Epic Adventure Games',
        description: 'Embark on a journey through vast worlds and thrilling stories with our adventure game picks.',
        icon: 'travel_explore',
        gradient: 'from-red-500 to-pink-500',
        glowColor: 'rgba(239,68,68,0.3)',
        borderColor: 'border-red-500/30',
        games: GAMES.filter(g => g.category === 'Adventure').slice(0, 4)
    },
    {
        id: 'new-releases',
        title: 'New Releases',
        description: 'Fresh off the press — check out the latest and greatest games added to the Awon platform.',
        icon: 'new_releases',
        gradient: 'from-teal-400 to-green-400',
        glowColor: 'rgba(52,211,153,0.3)',
        borderColor: 'border-teal-400/30',
        games: GAMES.slice(-4)
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// --- Individual Collection Card ---
const CollectionCard = ({ collection }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.div
            variants={cardVariants}
            layout
            className="group relative rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 bg-slate-900/60 backdrop-blur-sm transition-all duration-300"
            style={{ boxShadow: expanded ? `0 0 40px ${collection.glowColor}` : 'none' }}
        >
            {/* Gradient top accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${collection.gradient}`} />

            {/* Card Header */}
            <div className="p-7 md:p-8">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${collection.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                {collection.icon}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                                {collection.title}
                            </h2>
                            <p className="text-slate-400 text-sm mt-1 max-w-xl leading-relaxed">
                                {collection.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ml-auto flex-shrink-0">
                        <motion.button
                            onClick={() => navigate('/games')}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border ${collection.borderColor} text-slate-300 hover:text-white hover:bg-white/5 transition-all`}
                        >
                            View All
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </motion.button>
                        <motion.button
                            onClick={() => setExpanded(!expanded)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-10 h-10 rounded-xl border ${collection.borderColor} flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all`}
                        >
                            <motion.span
                                animate={{ rotate: expanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="material-symbols-outlined text-[20px]"
                            >
                                expand_more
                            </motion.span>
                        </motion.button>
                    </div>
                </div>

                {/* Preview thumbnails strip (always visible, collapsed) */}
                {!expanded && (
                    <div className="flex gap-2 mt-5 overflow-hidden">
                        {collection.games.slice(0, 4).map((g, i) => (
                            <motion.div
                                key={g.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => navigate(`/games/${g.slug}`)}
                                className="relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group/thumb border border-white/5 hover:border-white/20 transition-all"
                            >
                                <img src={g.thumbnail} alt={g.title} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300 opacity-80 group-hover/thumb:opacity-100" />
                                {i === 3 && collection.games.length > 4 && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm">
                                        +{collection.games.length - 3}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                        <div
                            onClick={() => setExpanded(true)}
                            className="flex items-center px-3 text-slate-500 hover:text-primary text-xs font-semibold cursor-pointer transition-colors gap-1"
                        >
                            <span>See games</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Expanded Games Grid */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-7 md:px-8 pb-8 border-t border-white/5 pt-6">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                            >
                                {collection.games.map((game) => (
                                    <motion.div key={game.id} variants={cardVariants} className="h-full">
                                        <GameCard
                                            title={game.title}
                                            thumbnail={game.thumbnail}
                                            rating={game.rating}
                                            gameUrl={`/games/${game.slug}`}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Collections Page ---
const CollectionsPage = () => {
    return (
        <div className="min-h-screen bg-background-dark text-white font-display relative">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-primary/10 blur-[150px] rounded-full" />
                <div className="absolute top-[50%] left-[40%] w-[30%] h-[30%] bg-purple-500/8 blur-[150px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full text-primary text-sm font-bold mb-6 tracking-wide">
                        <span className="material-symbols-outlined text-[18px]">collections_bookmark</span>
                        Curated For You
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-green-400 drop-shadow-lg leading-tight">
                        Game Collections
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Hand-picked lists of the best games for every mood, skill level, and genre. Click a collection to browse its full lineup.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-3 gap-4 mb-14 max-w-xl mx-auto"
                >
                    {[
                        { value: COLLECTIONS.length, label: 'Collections' },
                        { value: GAMES.length + '+', label: 'Total Games' },
                        { value: '100%', label: 'Free to Play' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-800/40 border border-white/5 rounded-2xl py-4 text-center">
                            <div className="text-2xl font-black text-primary">{stat.value}</div>
                            <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Collections List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="space-y-6"
                >
                    {COLLECTIONS.map(collection => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default CollectionsPage;
