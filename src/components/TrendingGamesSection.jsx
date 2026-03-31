/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import { GAMES } from '../data/games';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const TrendingGamesSection = () => {
    // using mock data for now
    const trendingGames = GAMES.slice(0, 8).map(game => ({
        id: game.id || game.slug,
        title: game.title,
        thumbnail: game.thumbnail,
        rating: game.rating,
        gameUrl: `/games/${game.slug}`
    }));

    return (
        <section className="mb-12 w-full pt-10">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-black text-white mb-10 flex items-center gap-3 drop-shadow-md"
            >
                <div className="bg-primary/20 p-2 rounded-xl border border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl animate-pulse">local_fire_department</span>
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
                    Trending Games
                </span>
            </motion.h2>
            
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {trendingGames.map((game) => (
                    <motion.div key={game.id} variants={itemVariants} className="h-full">
                        <GameCard
                            title={game.title}
                            thumbnail={game.thumbnail}
                            rating={game.rating}
                            gameUrl={game.gameUrl}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TrendingGamesSection;
