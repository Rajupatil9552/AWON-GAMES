/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';
import { Twitter, Facebook, Link as LinkIcon, User } from 'lucide-react';

// Mock Data
const blog = {
    title: "Mastering the Art of Competitive Play",
    author: "Alex Mercer",
    date: "March 15, 2026",
    category: "Esports",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    content: `
        <p>The landscape of competitive gaming has shifted dramatically over the past few years. What started as underground LAN parties has evolved into multi-billion dollar franchises filling stadiums around the world. Being at the top requires more than just mechanical skill; it demands tactical brilliance and mental fortitude.</p>
        
        <h2>The Rise of Next-Gen Platforms</h2>
        <p>With the introduction of cloud gaming and ultra-low latency networks, players are now experiencing games in ways completely unimaginable a decade ago. The barrier to entry has lowered, bringing in diverse talent from across the globe.</p>
        
        <h3>Key Innovations in 2026:</h3>
        <ul>
            <li>Haptic feedback mechanics for fully immersive play.</li>
            <li>AI-driven matchmaking and hybrid anti-cheat systems.</li>
            <li>Real-time coaching algorithms analyzing player moves in milliseconds.</li>
            <li>Holographic displays simulating terrain structure seamlessly.</li>
        </ul>
        
        <blockquote>"Esports is no longer just playing a game. It's an entire ecosystem of entertainment, technology, and sheer human skill pushing boundaries every day."</blockquote>
        
        <h2>Maintaining Mental Health</h2>
        <p>A big part of modern gaming is recognizing the importance of taking breaks. Professional teams now employ full-time psychologists to ensure their rosters are performing at their peak without suffering from burnout.</p>
        
        <p>Looking ahead, we can expect augmented reality (AR) to play a significant role. Imagine watching a holographic match on your living room table. The future is bright, and we're just getting started. See you in the arena!</p>
    `,
    authorBio: "Alex is a veteran esports analyst and former pro player. He covers everything from competitive meta shifts to hardware reviews.",
    authorAvatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop"
};

const relatedBlogs = [
    {
        id: "1",
        title: "Top 10 RPGs You Need to Play Right Now",
        excerpt: "Discover the most immersive worlds and gripping storylines in modern RPGs. From fantasy to cyberpunk, there is so much to explore.",
        thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Mastering the Controller: Pro Tips",
        excerpt: "Elevate your game with these advanced controller techniques used by pros. Perfect your aim and movement fluidity.",
        thumbnail: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "The Best Gaming Headsets of the Year",
        excerpt: "A comprehensive review of the top headsets for competitive edge, prioritizing spatial audio and uncompromised microphone clarity.",
        thumbnail: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop"
    }
];

// Recommended Games
const recommendedGames = GAMES.slice(0, 4);

const BlogDetailPage = () => {
    // Scroll to top on load or route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <main className="flex-grow bg-background-dark min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Blog Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="mb-4">
                        <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(43,238,121,0.15)] inline-block">
                            {blog.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-primary leading-tight mb-6 pb-2">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm md:text-base mb-8">
                        <span className="font-semibold text-white">{blog.author}</span>
                        <span>•</span>
                        <span>{blog.date}</span>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-[0_0_40px_rgba(43,238,121,0.1)] border border-white/5 mx-auto max-w-[800px]">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                    </div>
                </motion.div>

                {/* 2. Blog Content Section */}
                <motion.article 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[750px] mx-auto text-slate-300 leading-relaxed text-lg 
                    [&>p]:mb-6
                    [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-4 [&>h2]:mt-12
                    [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-10
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2 [&>ul>li]:pl-2
                    [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-3 [&>blockquote]:my-10 [&>blockquote]:bg-white/5 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-white [&>blockquote]:text-xl
                    [&>img]:rounded-2xl [&>img]:my-10 [&>img]:w-full [&>img]:border [&>img]:border-white/10
                    mb-20"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* 3. Author Section & 4. Share Section Container */}
                <div className="max-w-[750px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    
                    {/* Author Section */}
                    <div className="md:col-span-2 bg-card-dark rounded-3xl p-6 md:p-8 border border-primary/20 relative overflow-hidden group shadow-[0_5px_30px_rgba(0,0,0,0.2)]">
                        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-500 shadow-[0_0_0_rgba(43,238,121,0)] group-hover:shadow-[0_0_30px_rgba(43,238,121,0.1)] pointer-events-none"></div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10 text-center sm:text-left">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary shrink-0 shadow-[0_0_15px_rgba(43,238,121,0.3)]">
                                {blog.authorAvatar ? (
                                    <img src={blog.authorAvatar} alt={blog.author} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                        <User className="w-10 h-10 text-slate-400" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{blog.author}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{blog.authorBio}</p>
                            </div>
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="bg-card-dark rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col justify-center items-center gap-6 shadow-[0_5px_30px_rgba(0,0,0,0.2)] text-center h-full">
                        <h4 className="font-bold text-slate-300 text-lg">Share Article</h4>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:-translate-y-1 hover:bg-[#1DA1F2] hover:shadow-[0_5px_20px_rgba(29,161,242,0.4)] transition-all duration-300 border border-white/5 hover:border-transparent">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:-translate-y-1 hover:bg-[#1877F2] hover:shadow-[0_5px_20px_rgba(24,119,242,0.4)] transition-all duration-300 border border-white/5 hover:border-transparent">
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center text-white hover:-translate-y-1 hover:bg-primary hover:text-background-dark hover:shadow-[0_5px_20px_rgba(43,238,121,0.4)] transition-all duration-300 border border-white/5 hover:border-transparent" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                                <LinkIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Related Blogs Section */}
            <div className="bg-card-dark/40 py-20 border-y border-white/5 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,238,121,0.03)_0%,transparent_100%)] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-primary pl-4 tracking-wide">Related Articles</h2>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {relatedBlogs.map(post => (
                            <motion.div key={post.id} variants={itemVariants} className="bg-background-dark/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(43,238,121,0.1)] group flex flex-col h-full">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow relative">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">{post.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                    <div className="mt-auto">
                                        <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-white transition-colors group/link">
                                            Read More 
                                            <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 6. Recommended Games Section */}
            <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-10">
                    <span className="material-symbols-outlined text-primary text-4xl">stadia_controller</span>
                    <h2 className="text-3xl font-bold text-white tracking-wide">
                        Play These Games
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recommendedGames.map((game, idx) => (
                        <GameCard 
                            key={idx}
                            title={game.title}
                            thumbnail={game.thumbnail}
                            rating={game.rating}
                            gameUrl={`/games/${game.slug}`}
                        />
                    ))}
                </div>
            </div>
            
        </main>
    );
};

export default BlogDetailPage;
