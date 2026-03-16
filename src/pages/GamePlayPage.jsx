import React, { useRef, useEffect, useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';

const GamePlayPage = () => {
    const { id } = useParams();
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const gameData = GAMES.find(g => g.slug === id) || GAMES.find(g => g.id === id) || GAMES[0];
    
    const mockGame = {
        title: gameData.title,
        category: gameData.category,
        gameUrl: gameData.gameUrl,
        thumbnail: gameData.thumbnail,
    };

    const relatedGames = GAMES.slice(10, 14).map(rg => ({
        title: rg.title,
        thumbnail: rg.thumbnail,
        rating: rg.rating,
        gameUrl: `/games/${rg.slug}`
    }));

    // Scroll to top on page load smoothly
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleFullscreen = () => {
        if (playerRef.current) {
            if (playerRef.current.requestFullscreen) {
                playerRef.current.requestFullscreen();
            } else if (playerRef.current.mozRequestFullScreen) { /* Firefox */
                playerRef.current.mozRequestFullScreen();
            } else if (playerRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                playerRef.current.webkitRequestFullscreen();
            } else if (playerRef.current.msRequestFullscreen) { /* IE/Edge */
                playerRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div key={id} className="min-h-screen flex flex-col bg-background-dark text-white relative font-display pb-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[60%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"></div>
            </div>

            <main className="flex-grow relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 space-y-16">
                
                {/* 1. Game Title Section */}
                <section className="text-center space-y-4 pt-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary drop-shadow-lg"
                    >
                        {mockGame.title}
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-slate-800/60 border border-white/10 px-5 py-1.5 rounded-full text-slate-300 text-sm font-semibold tracking-wide"
                    >
                        {mockGame.category}
                    </motion.div>
                </section>

                {/* Optional Ad Space (Top) */}
                <div className="w-full max-w-5xl mx-auto h-[90px] bg-slate-800/40 border border-white/5 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                    Advertisement Banner
                </div>

                {/* 2. Game Player Section */}
                <section className="flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        ref={playerRef}
                        className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(43,238,121,0.2)] hover:border-primary/50 transition-colors duration-300 relative group"
                    >
                        {!isPlaying ? (
                            <>
                                <img
                                    src={mockGame.thumbnail}
                                    alt={mockGame.title}
                                    className="w-full h-[400px] md:h-[600px] xl:h-[700px] object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200'; }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        onClick={() => setIsPlaying(true)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative group/btn"
                                    >
                                        <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl animate-pulse group-hover/btn:bg-primary/60 transition-colors"></div>
                                        <div className="w-24 h-24 bg-gradient-to-tr from-primary to-blue-500 rounded-full flex items-center justify-center relative z-10 shadow-2xl shadow-primary/50 text-background-dark">
                                            <span className="material-symbols-outlined text-5xl ml-2" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                        </div>
                                    </motion.button>
                                </div>
                            </>
                        ) : (
                            <iframe
                                src={mockGame.gameUrl}
                                className="w-full h-[400px] md:h-[600px] xl:h-[700px] border-0"
                                title={mockGame.title}
                                allowFullScreen
                            ></iframe>
                        )}
                    </motion.div>
                </section>

                {/* Optional Ad Space (Middle) */}
                <div className="w-full max-w-3xl mx-auto h-[60px] bg-slate-800/40 border border-white/5 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                    Advertisement Banner
                </div>

                {/* 3. Game Actions Section */}
                <section className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <motion.button
                        onClick={handleFullscreen}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-slate-800/80 border border-blue-500/40 text-white font-bold flex items-center gap-2 hover:bg-blue-500/20 transition-colors"
                    >
                        <span className="material-symbols-outlined">fullscreen</span>
                        Play Fullscreen
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(43, 238, 121, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-slate-800/80 border border-primary/40 text-white font-bold flex items-center gap-2 hover:bg-primary/20 transition-colors"
                    >
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        Add to Favorites
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-slate-800/80 border border-purple-500/40 text-white font-bold flex items-center gap-2 hover:bg-purple-500/20 transition-colors"
                    >
                        <span className="material-symbols-outlined">share</span>
                        Share Game
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(239, 68, 68, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-slate-800/80 border border-red-500/40 text-white font-bold flex items-center gap-2 hover:bg-red-500/20 transition-colors"
                    >
                        <span className="material-symbols-outlined">flag</span>
                        Report Game
                    </motion.button>
                </section>

                {/* 5. Related Games Section */}
                <section className="pt-10 border-t border-white/10 w-full">
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            You May Also Like
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedGames.map((rg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <GameCard
                                    title={rg.title}
                                    thumbnail={rg.thumbnail}
                                    rating={rg.rating}
                                    gameUrl={rg.gameUrl}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};

export default GamePlayPage;
