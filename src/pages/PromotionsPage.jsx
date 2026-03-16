import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';

// Sample Data
const featuredPromotions = [
    {
        id: 1,
        title: "Featured Game Launch: Cyber Odyssey",
        description: "Experience the next generation of cyberpunk action. Get early access rewards today!",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
        cta: "Play Now"
    },
    {
        id: 2,
        title: "Seasonal Event: Winter Wonderland",
        description: "Join the festive fun with exclusive holiday skins, map themes, and double XP weekends.",
        image: "https://images.unsplash.com/photo-1547394765-1d6eb750aa14?auto=format&fit=crop&q=80&w=800",
        cta: "Explore Event"
    },
    {
        id: 3,
        title: "Editor's Pick: Neon Racing",
        description: "Our top recommendation of the week. Master the neon tracks and challenge global leaderboards.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
        cta: "Play Now"
    }
];

const partnerPromotions = [
    {
        id: 1,
        title: "Recommended Gaming Platforms",
        description: "Discover the best cloud gaming platforms. Get 1 month free through our exclusive partner link.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300",
        cta: "Visit Partner"
    },
    {
        id: 2,
        title: "Gaming Accessories Deals",
        description: "Upgrade your gear! Save up to 30% on premium mechanical keyboards and gaming mice this month.",
        image: "https://images.unsplash.com/photo-1611155986927-94d3fd44ca6d?auto=format&fit=crop&q=80&w=300",
        cta: "Shop Deals"
    }
];

const trendingGames = [
    {
        title: 'Cyber Odyssey',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
        rating: 4.8,
        gameUrl: '#'
    },
    {
        title: 'Neon Drift Racing',
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
        rating: 4.9,
        gameUrl: '#'
    },
    {
        title: 'Starship Commander',
        thumbnail: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800',
        rating: 4.6,
        gameUrl: '#'
    },
    {
        title: 'Pixel Dungeons',
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        rating: 4.3,
        gameUrl: '#'
    }
];

// Countdown Timer Component
const CountdownTimer = ({ initialHours }) => {
    const [timeLeft, setTimeLeft] = useState(initialHours * 3600);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex gap-2 text-primary font-mono text-2xl font-bold bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 inline-flex mt-4"
        >
            <span>{String(hours).padStart(2, '0')}</span>:
            <span>{String(minutes).padStart(2, '0')}</span>:
            <span>{String(seconds).padStart(2, '0')}</span>
        </motion.div>
    );
};

const PromotionsPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background-dark text-white relative overflow-hidden font-display">
            {/* Background Gradient Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Removed Navbar component call since App.jsx already wraps all routes with it */}

            <main className="flex-grow relative z-10">
                {/* 2. Hero Section */}
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl rounded-[100%]"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-green-400 drop-shadow-lg"
                    >
                        Special Promotions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-2xl"
                    >
                        Discover featured games, exciting events, and limited-time offers.
                    </motion.p>
                </section>

                {/* 3. Featured Promotions Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-primary text-3xl">star</span>
                        <h2 className="text-3xl font-bold">Featured Promotions</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredPromotions.map((promo, idx) => (
                            <motion.div
                                key={promo.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                className="group bg-slate-800/50 border border-white/5 hover:border-primary/50 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(43,238,121,0.15)] transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10" />
                                    <img src={promo.image} alt={promo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow relative z-20 -mt-10 bg-gradient-to-b from-transparent to-slate-900">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{promo.title}</h3>
                                    <p className="text-slate-400 mb-6 flex-grow">{promo.description}</p>
                                    <button className="w-full py-3 rounded-full bg-primary text-background-dark font-bold hover:bg-white hover:text-background-dark transition-colors shadow-lg shadow-primary/20">
                                        {promo.cta}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 4. Limited-Time Offers Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-red-500 text-3xl">timer</span>
                        <h2 className="text-3xl font-bold">Limited-Time Offers</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-red-500/50 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Offer 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-red-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/60 transition-colors"
                        >
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 blur-3xl group-hover:bg-red-500/20 transition-colors"></div>
                            <h3 className="text-2xl font-bold mb-3">🔥 Weekend Racing Challenge</h3>
                            <p className="text-slate-400 mb-4">Play racing games this weekend and compete for the highest score. Top 100 win exclusive rewards!</p>
                            <CountdownTimer initialHours={48} />
                            <button className="mt-8 px-8 py-3 rounded-full bg-red-500 text-white font-bold hover:bg-red-400 transition-colors block">
                                Play Racing Games
                            </button>
                        </motion.div>

                        {/* Offer 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/60 transition-colors"
                        >
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                            <h3 className="text-2xl font-bold mb-3">⚡ Flash Sale: 2x XP Boost</h3>
                            <p className="text-slate-400 mb-4">Level up faster! All multiplayer games offer double experience points for a limited time.</p>
                            <CountdownTimer initialHours={12} />
                            <button className="mt-8 px-8 py-3 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-400 transition-colors block">
                                Join Multiplayer
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* 5. Sponsored / Partner Promotions */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-purple-500 text-3xl">handshake</span>
                        <h2 className="text-3xl font-bold">Partner Promotions</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partnerPromotions.map((partner, idx) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row bg-[#1e293b] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-colors"
                            >
                                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                                    <img src={partner.image} alt={partner.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-2 text-white">{partner.title}</h3>
                                    <p className="text-sm text-slate-400 mb-6 flex-grow">{partner.description}</p>
                                    <button className="self-start text-sm px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-background-dark transition-colors font-bold">
                                        {partner.cta}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 6. Trending Games Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-primary text-3xl">local_fire_department</span>
                        <h2 className="text-3xl font-bold">Trending Games</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trendingGames.map((game, idx) => (
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
                                    title={game.title}
                                    thumbnail={game.thumbnail}
                                    rating={game.rating}
                                    gameUrl={game.gameUrl}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Removed Footer component call since App.jsx already wraps all routes with it */}
        </div>
    );
};

export default PromotionsPage;
