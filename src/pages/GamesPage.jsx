/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';

const CATEGORIES = ['All', 'Action', 'Racing', 'Puzzles', 'Arcade', 'Hypercasual', 'Sports', 'Adventure', 'Girls', '3D'];

// Mock game data mapped from centralized games file
const MOCK_GAMES = GAMES.map(game => ({
    id: game.id,
    title: game.title,
    category: game.category,
    rating: game.rating,
    thumbnail: game.thumbnail,
    gameUrl: `/games/${game.slug}`
}));

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const GamesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Use URL params as the single source of truth for the search query
    const searchQuery = searchParams.get('search') || '';



    const filteredGames = useMemo(() => {
        return MOCK_GAMES.filter((game) => {
            const matchesCategory = selectedCategory === 'All' || game.category.toLowerCase() === selectedCategory.toLowerCase();
            const matchesSearchTitle = game.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSearchCategory = game.category.toLowerCase().includes(searchQuery.toLowerCase());

            // Allow search query to try finding both title and category matches
            const matchesSearch = matchesSearchTitle || matchesSearchCategory;

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Grouping games by category solely for display if "All" is not selected
    // Or if "All" is selected, we map over categories that have games
    const gamesByCategory = useMemo(() => {
        const grouped = {};
        filteredGames.forEach(game => {
            if (!grouped[game.category]) {
                grouped[game.category] = [];
            }
            grouped[game.category].push(game);
        });
        return grouped;
    }, [filteredGames]);

    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-16 flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
                {/* 1. Page Header Section */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-green-400 drop-shadow-lg"
                    >
                        All Games
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Explore hundreds of exciting browser games across multiple categories.
                    </motion.p>
                </div>



                {/* 2. Category Navigation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {CATEGORIES.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-blue-500 to-primary text-background-dark shadow-[0_0_15px_rgba(43,238,121,0.4)]'
                                : 'bg-[#1e293b] text-slate-300 hover:text-white hover:bg-[#2dd4bf]/20 border border-white/5 hover:border-[#2dd4bf]/50 hover:shadow-[0_0_10px_rgba(45,212,191,0.2)]'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* 3 & 4. Games Grid & Category Sections */}
                <div className="space-y-16">
                    <AnimatePresence mode="popLayout">
                        {Object.keys(gamesByCategory).length > 0 ? (
                            Object.keys(gamesByCategory).sort((a, b) => CATEGORIES.indexOf(a) - CATEGORIES.indexOf(b)).map(category => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="pt-4"
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <h2 className="text-3xl font-black text-white">{category} Games</h2>
                                        <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
                                    </div>
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="show"
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                    >
                                        {gamesByCategory[category].map((game) => (
                                            <motion.div key={game.id} variants={itemVariants} layoutId={`game-${game.id}`}>
                                                <GameCard
                                                    title={game.title}
                                                    thumbnail={game.thumbnail}
                                                    rating={game.rating}
                                                    gameUrl={game.gameUrl}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <span className="material-symbols-outlined text-6xl text-slate-600 mb-4 block">
                                    sentiment_dissatisfied
                                </span>
                                <h3 className="text-2xl font-bold text-slate-400">No games found</h3>
                                <p className="text-slate-500 mt-2">Try adjusting your search or category filter.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default GamesPage;
