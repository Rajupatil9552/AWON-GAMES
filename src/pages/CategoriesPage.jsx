/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
    {
        id: 'action',
        title: 'Action',
        description: 'Fast-paced action and combat games',
        icon: 'swords',
        color: 'from-orange-500 to-red-500',
        shadow: 'rgba(239, 68, 68, 0.4)'
    },
    {
        id: 'racing',
        title: 'Racing',
        description: 'High-speed driving and drift games',
        icon: 'directions_car',
        color: 'from-blue-500 to-cyan-500',
        shadow: 'rgba(6, 182, 212, 0.4)'
    },
    {
        id: 'puzzle',
        title: 'Puzzle',
        description: 'Brain teasers and logic challenges',
        icon: 'extension',
        color: 'from-purple-500 to-pink-500',
        shadow: 'rgba(236, 72, 153, 0.4)'
    },
    {
        id: 'multiplayer',
        title: 'Multiplayer',
        description: 'Play with or against others online',
        icon: 'group',
        color: 'from-green-400 to-emerald-600',
        shadow: 'rgba(16, 185, 129, 0.4)'
    },
    {
        id: 'arcade',
        title: 'Arcade',
        description: 'Classic coin-op style retro games',
        icon: 'sports_esports',
        color: 'from-yellow-400 to-orange-500',
        shadow: 'rgba(245, 158, 11, 0.4)'
    },
    {
        id: 'sports',
        title: 'Sports',
        description: 'Competitive physical sports games',
        icon: 'sports_soccer',
        color: 'from-teal-400 to-blue-500',
        shadow: 'rgba(59, 130, 246, 0.4)'
    },
    {
        id: 'adventure',
        title: 'Adventure',
        description: 'Story-driven exploration games',
        icon: 'explore',
        color: 'from-indigo-500 to-purple-600',
        shadow: 'rgba(99, 102, 241, 0.4)'
    },
    {
        id: 'strategy',
        title: 'Strategy',
        description: 'Tactical planning and management',
        icon: 'chess',
        color: 'from-rose-400 to-red-600',
        shadow: 'rgba(225, 29, 72, 0.4)'
    },
    {
        id: 'shooting',
        title: 'Shooting',
        description: 'First and third-person shooters',
        icon: 'my_location',
        color: 'from-cyan-400 to-blue-600',
        shadow: 'rgba(37, 99, 235, 0.4)'
    },
    {
        id: 'casual',
        title: 'Casual',
        description: 'Relaxing and simple pickup games',
        icon: 'coffee',
        color: 'from-lime-400 to-green-600',
        shadow: 'rgba(101, 163, 13, 0.4)'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const CategoriesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-16 relative overflow-hidden flex flex-col">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-grow">
                {/* 2. Page Hero Header */}
                <div className="text-center mb-16 pt-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-green-400 drop-shadow-[0_0_15px_rgba(43,238,121,0.3)] tracking-tight"
                    >
                        Game Categories
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Explore different types of games and discover your favorites.
                        Find exactly what you want to play instantly.
                    </motion.p>
                </div>

                {/* 3 & 4. Categories Grid Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                >
                    {CATEGORIES.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                        >
                            <motion.div
                                onClick={() => navigate(`/games?search=${category.title}`)}
                                whileHover="hover"
                                initial="initial"
                                className="group relative flex flex-col bg-[#0f172a]/80 backdrop-blur-md rounded-3xl p-8 cursor-pointer border border-white/5 transition-all duration-300 h-full overflow-hidden"
                                variants={{
                                    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                                    hover: { scale: 1.03, boxShadow: `0px 15px 40px -10px ${category.shadow}` }
                                }}
                            >
                                {/* Gradient Hover Overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-10`}
                                />

                                {/* Icon Container */}
                                <div className="mb-6 relative">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg relative z-10`}>
                                        <motion.span
                                            className="material-symbols-outlined text-white text-3xl font-bold"
                                            variants={{
                                                initial: { rotate: 0, scale: 1 },
                                                hover: { rotate: [0, -10, 10, 0], scale: 1.1 }
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {category.icon}
                                        </motion.span>
                                    </div>
                                    {/* Icon Glow Behind */}
                                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                    {category.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {category.description}
                                </p>

                                {/* Animated Bottom Border Glow on Hover */}
                                <motion.div
                                    className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-primary origin-left"
                                    variants={{
                                        initial: { scaleX: 0, opacity: 0 },
                                        hover: { scaleX: 1, opacity: 1 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CategoriesPage;
