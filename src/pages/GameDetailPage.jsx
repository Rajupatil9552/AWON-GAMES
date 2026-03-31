import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import CommentsSection from '../components/CommentsSection';

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
    const { id } = useParams();
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCollectionModal, setShowCollectionModal] = useState(false);
    const [addedCollections, setAddedCollections] = useState([]);
    const navigate = useNavigate();

    // Mock collections a user can add to
    const MY_COLLECTIONS = [
        { id: 'top-rated',         label: 'Top Rated Games',       icon: 'workspace_premium', color: 'text-yellow-400' },
        { id: 'brain-teasers',     label: 'Best Puzzle Games',     icon: 'psychology',         color: 'text-purple-400' },
        { id: 'multiplayer-madness', label: 'Best Multiplayer',    icon: 'group',              color: 'text-primary' },
        { id: 'quick-play',        label: 'Quick Play Picks',      icon: 'bolt',               color: 'text-blue-400' },
        { id: 'great-adventures',  label: 'Epic Adventure Games',  icon: 'travel_explore',     color: 'text-red-400' },
        { id: 'new-releases',      label: 'New Releases',          icon: 'new_releases',       color: 'text-teal-400' },
    ];

    const toggleCollection = (collectionId) => {
        setAddedCollections(prev =>
            prev.includes(collectionId)
                ? prev.filter(c => c !== collectionId)
                : [...prev, collectionId]
        );
    };
    
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
        setIsPlaying(true);
    };

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
        <div className="min-h-screen flex flex-col bg-background-dark text-white relative font-display">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
                <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full"></div>
            </div>

            <main className="flex-grow relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 space-y-20">

                {/* 1. Game Player Section */}
                <section className="mt-8 flex flex-col items-center">
                    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-green-400 drop-shadow-md">
                            {game.title}
                        </h1>

                        {!isPlaying && (
                            <div className="flex items-center gap-3 flex-wrap">
                                <motion.button
                                    onClick={handlePlayGame}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 rounded-full bg-primary text-background-dark font-black text-lg tracking-wide shadow-[0_0_20px_rgba(43,238,121,0.4)] hover:shadow-[0_0_30px_rgba(43,238,121,0.6)] hover:bg-white transition-all duration-300 flex items-center gap-2 max-w-max"
                                >
                                    <span className="material-symbols-outlined font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                    Play Game Now
                                </motion.button>

                                <motion.button
                                    onClick={() => setShowCollectionModal(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-3 rounded-full bg-slate-800 border border-white/10 hover:border-primary/50 text-white font-bold flex items-center gap-2 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                                    Add to Collection
                                </motion.button>
                            </div>
                        )}
                    </div>

                    <motion.div 
                        ref={playerRef}
                        className="w-full bg-black rounded-3xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(43,238,121,0.15)] group transition-all duration-500 hover:border-primary/60 relative"
                    >
                        {!isPlaying ? (
                            <div className="relative w-full aspect-video md:aspect-[21/9]">
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
                        ) : (
                            <iframe
                                src={game.embedUrl}
                                className="w-full aspect-video md:aspect-[21/9] border-0"
                                title={game.title}
                                allowFullScreen
                            ></iframe>
                        )}
                    </motion.div>

                    {/* Additional Next-Gen Game Actions */}
                    {isPlaying && (
                        <div className="w-full flex flex-wrap items-center justify-center md:justify-end gap-4 mt-6">
                            <motion.button
                                onClick={handleFullscreen}
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 rounded-xl bg-slate-800/80 border border-blue-500/40 text-white font-bold flex items-center gap-2 hover:bg-blue-500/20 transition-colors"
                            >
                                <span className="material-symbols-outlined">fullscreen</span>
                                Fullscreen
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(43, 238, 121, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 rounded-xl bg-slate-800/80 border border-primary/40 text-white font-bold flex items-center gap-2 hover:bg-primary/20 transition-colors"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                Favorite
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 rounded-xl bg-slate-800/80 border border-purple-500/40 text-white font-bold flex items-center gap-2 hover:bg-purple-500/20 transition-colors"
                            >
                                <span className="material-symbols-outlined">share</span>
                                Share
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(239, 68, 68, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 rounded-xl bg-slate-800/80 border border-red-500/40 text-white font-bold flex items-center gap-2 hover:bg-red-500/20 transition-colors"
                            >
                                <span className="material-symbols-outlined">flag</span>
                                Report
                            </motion.button>
                        </div>
                    )}
                </section>

                {/* Add to Collection Modal */}
                <AnimatePresence>
                    {showCollectionModal && (
                        <motion.div
                            key="collection-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                            onClick={() => setShowCollectionModal(false)}
                        >
                            <motion.div
                                key="collection-modal"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                                className="bg-slate-900 border border-white/10 rounded-3xl p-7 w-full max-w-md shadow-2xl shadow-black/50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-black text-white">Add to Collection</h3>
                                        <p className="text-slate-400 text-sm mt-1">Save <span className="text-primary font-semibold">{game.title}</span> to a list</p>
                                    </div>
                                    <button onClick={() => setShowCollectionModal(false)} className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">close</span>
                                    </button>
                                </div>

                                {/* Collections List */}
                                <div className="space-y-2 mb-6">
                                    {MY_COLLECTIONS.map(col => {
                                        const isAdded = addedCollections.includes(col.id);
                                        return (
                                            <motion.button
                                                key={col.id}
                                                onClick={() => toggleCollection(col.id)}
                                                whileHover={{ x: 4 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 text-left ${
                                                    isAdded
                                                        ? 'bg-primary/10 border-primary/40'
                                                        : 'bg-slate-800/50 border-white/5 hover:border-white/15 hover:bg-slate-800'
                                                }`}
                                            >
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                    isAdded ? 'bg-primary/20' : 'bg-slate-700'
                                                }`}>
                                                    <span className={`material-symbols-outlined text-[20px] ${isAdded ? 'text-primary' : col.color}`}
                                                        style={{ fontVariationSettings: "'FILL' 1" }}>
                                                        {col.icon}
                                                    </span>
                                                </div>
                                                <span className={`font-semibold flex-grow ${ isAdded ? 'text-white' : 'text-slate-300' }`}>{col.label}</span>
                                                <span className={`material-symbols-outlined text-[22px] transition-colors ${ isAdded ? 'text-primary' : 'text-slate-600' }`}
                                                    style={{ fontVariationSettings: isAdded ? "'FILL' 1" : "'FILL' 0" }}>
                                                    check_circle
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Footer Actions */}
                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => { setShowCollectionModal(false); navigate('/collections'); }}
                                        className="flex-1 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">collections_bookmark</span>
                                        View All Collections
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setShowCollectionModal(false)}
                                        disabled={addedCollections.length === 0}
                                        className="flex-1 py-3 rounded-xl bg-primary text-background-dark font-black text-sm flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(43,238,121,0.3)] transition-all"
                                    >
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                                        Save ({addedCollections.length})
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Main Column: Description and Controls */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* 2. Game Description Section */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-blue-400 text-3xl">info</span>
                                <h2 className="text-3xl font-bold">About This Game</h2>
                                <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                            </div>
                            <div className="bg-slate-800/30 border border-white/5 rounded-3xl p-8 text-lg text-slate-300 leading-relaxed shadow-lg">
                                <p>{game.description}</p>
                            </div>
                        </section>

                        {/* 3. Controls Section */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-green-400 text-3xl">sports_esports</span>
                                <h2 className="text-3xl font-bold">Controls</h2>
                                <div className="h-[2px] flex-grow bg-gradient-to-r from-green-400/50 to-transparent"></div>
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

                    {/* Right Sidebar Column: Metadata */}
                    <div className="lg:col-span-4">
                        {/* 4. Game Metadata Section */}
                        <section className="bg-slate-800/20 border border-white/5 rounded-3xl p-8 sticky top-24">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">data_object</span>
                                Game Details
                            </h3>
                            <div className="flex flex-col gap-4">
                                {[
                                    { icon: "code", label: "Developer", value: game.developer },
                                    { icon: "star", label: "Rating", value: `${game.rating} / 5.0`, color: "text-yellow-400" },
                                    { icon: "calendar_today", label: "Release Date", value: game.releaseDate },
                                    { icon: "memory", label: "Technology", value: game.technology },
                                    { icon: "devices", label: "Platforms", value: game.platforms.join(', ') }
                                ].map((meta, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <span className={`material-symbols-outlined text-[18px] ${meta.color || 'text-primary'}`}>
                                                {meta.icon}
                                            </span>
                                            <span className="text-sm">{meta.label}</span>
                                        </div>
                                        <div className="font-bold text-white text-lg">{meta.value}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
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

                {/* Game Comments Section UI */}
                <section className="max-w-4xl mx-auto w-full">
                    <CommentsSection />
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
