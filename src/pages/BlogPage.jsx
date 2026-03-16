import React from 'react';
import BlogHero from '../components/BlogHero';
import BlogArticleCard from '../components/BlogArticleCard';
import Newsletter from '../components/Newsletter';

const BlogPage = () => {
    const articles = [
        {
            id: 1,
            category: 'Updates',
            categoryColor: 'bg-accent-blue/90 text-white',
            date: 'March 24, 2024',
            title: 'Mystic Realms: Season 4 Trailer Breakdown',
            description: 'Discover the secrets hidden in the latest cinematic trailer as we prepare for the biggest content drop yet...',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWtsyG_a9FFsE35gknICt6kFpft-NSx5jJ_It-0sIgCI71EWuMZbiDzhvU89SgTz5wSYGtbCdzNqWczUd25F0d7Z3l-wUxssKLYWaplJxrIrFN0Rv-72pVD4w2tkV_M4q-8jwxhcK_aMu_3tKYqiSjCuK4hCqPgo-0rvw3cSooJwba3o1XERGt2MEnf-1fU4Rpgfl0lOS2aWHAZdqu4DkgPj2HAWjMnDxXS1H8T2K_fIsFmH8Tci7E9uMnH_T8itf73HUeT8M1-uiY'
        },
        {
            id: 2,
            category: 'Esports',
            categoryColor: 'bg-primary/90 text-background-dark',
            date: 'March 22, 2024',
            title: 'Global Finals: Meet the Top Contenders',
            description: 'We profile the eight teams heading to Tokyo for the World Championship. Who will take home the $2M prize?',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWrrIbH-Hj7Tzk4qlHpDY5rzZX-xwMUkqtvcHOIyR9ykOu6e3wlK00WTZq29vFRlvwmJRqflNGug6L4lwZYIh-u-vVVuyi5SGdbjYn6vLyFM89PI1LhnarFaxBtgqU_hU15ILy0-OCGKbHpPtT3bzjGHcKtlfMF9WiiWBgmPcYQ_vmzZ5uvvE1Muy-RjZQN7OBA68yqzlqrnbfNeNnFt7n47T6Lym89Oi_cuZY_mtrX47BUGCi2pYWuBBxy-sfNeSN2keT_ePeGJt5'
        },
        {
            id: 3,
            category: 'Esports',
            categoryColor: 'bg-primary/90 text-background-dark',
            date: 'March 15, 2026',
            title: 'Mastering the Art of Competitive Play',
            description: 'The landscape of competitive gaming has shifted dramatically. What started as underground LAN parties has evolved into multi-billion dollar franchises...',
            imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <main className="flex-grow bg-background-dark relative border-t border-primary/20 shadow-[0_-10px_30px_rgba(43,238,121,0.05)] pt-24">
            <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BlogHero />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {articles.map((article) => (
                        <BlogArticleCard
                            key={article.id}
                            {...article}
                        />
                    ))}
                </div>

                <Newsletter />
            </div>
        </main>
    );
};

export default BlogPage;
