/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ title, thumbnail, rating, gameUrl }) => {
    const navigate = useNavigate();

    // Generate stars based on rating (out of 5)
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                    </span>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star_half
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className="material-symbols-outlined text-slate-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                    </span>
                );
            }
        }
        return stars;
    };

    return (
        <motion.div
            onClick={() => {
                if (gameUrl && gameUrl !== '#') {
                    navigate(gameUrl);
                } else {
                    // Fallback placeholder navigation if no url provided
                    navigate('/games/1');
                }
            }}
            whileHover="hover"
            initial="initial"
            className="group relative flex flex-col bg-[#0f172a] rounded-2xl overflow-hidden cursor-pointer border border-white/5 transition-all duration-300"
            variants={{
                initial: { scale: 1, boxShadow: "0px 0px 0px rgba(43, 238, 121, 0)" },
                hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(43, 238, 121, 0.15)" }
            }}
        >
            {/* Thumbnail Container */}
            <div className="relative aspect-video overflow-hidden bg-slate-800">
                <motion.img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
                {/* Top Gradient Overlay */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1">
                    <span className="text-yellow-400 text-xs font-bold">{rating.toFixed(1)}</span>
                    <span className="material-symbols-outlined text-yellow-400 text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {title}
                </h3>

                <div className="flex items-center gap-1 mb-6">
                    {renderStars()}
                    <span className="text-slate-400 text-xs ml-1">(124)</span>
                </div>

                <div className="mt-auto">
                    <motion.button
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-primary text-background-dark font-bold flex items-center justify-center gap-2 overflow-hidden relative"
                        variants={{
                            initial: { boxShadow: "0 0 0px rgba(43, 238, 121, 0)" },
                            hover: { boxShadow: "0 0 15px rgba(43, 238, 121, 0.4)" }
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                play_arrow
                            </span>
                            Play Now
                        </span>
                        {/* Button Hover Glow Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            variants={{
                                initial: { opacity: 0 },
                                hover: { opacity: 1 }
                            }}
                        />
                    </motion.button>
                </div>
            </div>

            {/* Decorative Gradient Border on Hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                variants={{
                    initial: { borderColor: "rgba(255,255,255,0.05)" },
                    hover: { borderColor: "rgba(43, 238, 121, 0.3)" }
                }}
            />
        </motion.div>
    );
};

export default GameCard;
