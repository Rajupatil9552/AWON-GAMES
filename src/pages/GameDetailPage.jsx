import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import GameCard from '../components/GameCard';

import { GAMES } from '../data/games';

// FAQ Accordion Component
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-xl overflow-hidden mb-4 bg-slate-800/40 hover:border-primary/30 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
            >
                <span className="font-bold text-lg text-white">{question}</span>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const GameDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const gameData = GAMES.find(g => g.slug === id) || GAMES.find(g => g.id === id) || GAMES[0];
    
    const game = {
        title: gameData.title,
        developer: gameData.developer,
        rating: gameData.rating,
        releaseDate: gameData.releaseDate,
        technology: gameData.technology,
        platforms: gameData.platforms,
        description: gameData.description,
        thumbnail: gameData.thumbnail,
        embedUrl: gameData.gameUrl,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        controls: [
            { key: "Mouse / Touch", action: "Primary Action" },
            { key: "Arrows / WASD", action: "Movement (if supported)" }
        ],
        faqs: [
            { question: "Is this game free to play?", answer: `Yes, ${gameData.title} is completely free to play directly in your browser.` },
            { question: "Do I need to download anything to play?", answer: "No, the game runs entirely in your modern web browser." }
        ]
    };

    const relatedGames = GAMES.slice(6, 10).map(rg => ({
        title: rg.title,
        thumbnail: rg.thumbnail,
        rating: rg.rating,
        gameUrl: `/games/${rg.slug}`
    }));

    // Scroll to top on page load smoothly
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handlePlayGame = () => {
        navigate(`/play/${gameData.slug}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-dark text-white relative font-display">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
                <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full"></div>
            </div>

            <main className="flex-grow relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 space-y-20">

                {/* 1. Game Player Section */}
                <section className="mt-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-green-400 drop-shadow-md">
                            {game.title}
                        </h1>

                        <motion.button
                            onClick={handlePlayGame}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-primary text-background-dark font-black text-lg tracking-wide shadow-[0_0_20px_rgba(43,238,121,0.4)] hover:shadow-[0_0_30px_rgba(43,238,121,0.6)] hover:bg-white transition-all duration-300 flex items-center gap-2 max-w-max"
                        >
                            <span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            Play Game Now
                        </motion.button>
                    </div>

                    <div className="relative w-full aspect-video md:aspect-[21/9] bg-slate-900 rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(43,238,121,0.15)] group transition-all duration-500 hover:border-primary/60">
                        <img
                            src={game.thumbnail}
                            alt={game.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                onClick={handlePlayGame}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group/btn"
                            >
                                <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl animate-pulse group-hover/btn:bg-primary/60 transition-colors"></div>
                                <div className="w-24 h-24 bg-gradient-to-tr from-primary to-blue-500 rounded-full flex items-center justify-center relative z-10 shadow-2xl shadow-primary/50 text-background-dark">
                                    <span className="material-symbols-outlined text-5xl ml-2">play_arrow</span>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </section>

                {/* 2. Game Metadata Section */}
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { icon: "code", label: "Developer", value: game.developer },
                            { icon: "star", label: "Rating", value: `${game.rating} / 5.0`, color: "text-yellow-400" },
                            { icon: "calendar_today", label: "Release Date", value: game.releaseDate },
                            { icon: "memory", label: "Technology", value: game.technology },
                            { icon: "devices", label: "Platforms", value: game.platforms.join(', ') }
                        ].map((meta, idx) => (
                            <div key={idx} className="bg-slate-800/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/60 hover:border-primary/30 transition-colors">
                                <span className={`material-symbols-outlined text-3xl mb-3 ${meta.color || 'text-primary'}`}>
                                    {meta.icon}
                                </span>
                                <span className="text-sm text-slate-400 mb-1">{meta.label}</span>
                                <span className="font-bold text-white">{meta.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Game Description Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-blue-400 text-3xl">info</span>
                        <h2 className="text-3xl font-bold">About This Game</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                    </div>
                    <div className="bg-slate-800/30 border border-white/5 rounded-3xl p-8 md:p-10 text-lg text-slate-300 leading-relaxed shadow-lg">
                        <p>{game.description}</p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* 4. Gameplay Video Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-red-500 text-3xl">play_circle</span>
                            <h2 className="text-3xl font-bold">Gameplay Video</h2>
                        </div>
                        <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                            <iframe
                                className="w-full h-full"
                                src={game.videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>

                    {/* 5. Controls Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-green-400 text-3xl">sports_esports</span>
                            <h2 className="text-3xl font-bold">Controls</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {game.controls.map((control, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-slate-800/40 border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-green-400/30 transition-colors"
                                >
                                    <div className="bg-[#1e293b] text-primary font-mono font-bold px-4 py-2 rounded-xl border border-primary/20 shadow-inner">
                                        {control.key}
                                    </div>
                                    <div className="text-slate-300 font-medium">
                                        <span className="text-slate-500 mr-2">→</span> {control.action}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* 6. FAQ Section */}
                <section className="max-w-4xl mx-auto w-full">
                    <div className="flex items-center gap-3 mb-8 justify-center">
                        <span className="material-symbols-outlined text-purple-400 text-3xl">help</span>
                        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
                    </div>
                    <div>
                        {game.faqs.map((faq, idx) => (
                            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* 7. Related Games Section */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                        <h2 className="text-3xl font-bold">More Games Like This</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedGames.map((rg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
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

export default GameDetailPage;
