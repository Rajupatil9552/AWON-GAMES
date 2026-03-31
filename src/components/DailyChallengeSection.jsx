/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { GAMES } from '../data/games';
import { useNavigate } from 'react-router-dom';

const DailyChallengeSection = () => {
    const navigate = useNavigate();
    // Use a specific mock game for the daily challenge layout
    const dailyGame = GAMES[2] || GAMES[0];
    
    const handlePlayNow = () => {
        navigate(`/games/${dailyGame.slug}`);
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full mb-16 relative group"
        >
            {/* Dark UI with Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-primary to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            
            <div className="relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl">
                
                {/* Game Thumbnail Side */}
                <div className="w-full md:w-1/2 relative min-h-[300px] overflow-hidden">
                    <img 
                        src={dailyGame.thumbnail} 
                        alt={dailyGame.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900 via-slate-900/40 to-transparent pointer-events-none"></div>
                    
                    {/* Featured Challenge Badge */}
                    <div className="absolute top-6 left-6 bg-red-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                        <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                        Daily Challenge
                    </div>
                </div>

                {/* Challenge Description & Actions */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-slate-900 md:bg-transparent">
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-md">
                        Survive the <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                            {dailyGame.title}
                        </span> Grid
                    </h3>
                    
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        Beat the developer's high score of 45,000 points today to earn an exclusive legendary avatar border and 500 bonus Awon Coins! Are you ready to prove your skills?
                    </p>

                    <div className="flex items-center gap-6 mt-auto">
                        <motion.button
                            onClick={handlePlayNow}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ 
                                boxShadow: ["0px 0px 0px rgba(43,238,121,0)", "0px 0px 25px rgba(43,238,121,0.6)", "0px 0px 0px rgba(43,238,121,0)"]
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                            }}
                            className="px-8 py-4 bg-primary text-background-dark font-black text-lg rounded-xl flex items-center gap-2 hover:bg-white transition-colors uppercase tracking-wider relative overflow-hidden"
                        >
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            Accept Challenge
                        </motion.button>
                        
                        <div className="text-slate-400 text-sm hidden sm:block">
                            <div className="font-bold text-white mb-1">Time Remaining</div>
                            <div className="flex items-center gap-1 text-red-400 font-mono text-lg animate-pulse">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                08:42:15
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default DailyChallengeSection;
