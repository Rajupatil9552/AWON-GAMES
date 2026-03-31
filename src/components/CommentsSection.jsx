/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_COMMENTS = [
    {
        id: 1,
        username: "PixelHunter99",
        message: "This game is absolutely incredible! The graphics are stunning and the gameplay is super smooth.",
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        username: "NeonNinja",
        message: "Took me a few tries to beat the first level but it's really addicting once you get the hang of the controls. Highly recommend setting up a controller if you can.",
        timestamp: "5 hours ago"
    },
    {
        id: 3,
        username: "CyberSamurai",
        message: "Can't wait for the multiplayer update to drop next week! Does anyone know if there will be cross-play?",
        timestamp: "1 day ago"
    }
];

const CommentsSection = () => {
    const [comments, setComments] = useState(MOCK_COMMENTS);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const commentObj = {
            id: Date.now(),
            username: "GuestPlayer", // Mocking the current logged-in user
            message: newComment,
            timestamp: "Just now"
        };

        // Add the new comment strictly to the top of the feed array
        setComments([commentObj, ...comments]);
        setNewComment('');
    };

    return (
        <section className="w-full mt-12 bg-slate-900/50 rounded-3xl p-6 md:p-8 border border-white/5 backdrop-blur-sm font-display relative z-10">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl animate-pulse">forum</span>
                <h2 className="text-3xl font-black text-white">Discussion</h2>
                <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-0.5 rounded-full text-sm font-bold ml-2 shadow-[0_0_10px_rgba(43,238,121,0.2)]">
                    {comments.length}
                </span>
            </div>

            {/* Comment Input Form */}
            <form onSubmit={handleSubmit} className="mb-10 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>
                <div className="relative bg-slate-800 rounded-2xl p-4 flex flex-col gap-3 border border-white/10 focus-within:border-primary/50 transition-colors shadow-inner">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="What are your thoughts on this game?"
                        className="w-full bg-transparent text-white placeholder-slate-400 outline-none resize-none min-h-[100px] leading-relaxed"
                    />
                    <div className="flex justify-between items-center mt-2 border-t border-white/10 pt-3 flex-wrap gap-4">
                        {/* Mock Text Formatters */}
                        <div className="flex items-center gap-3 text-slate-400">
                            <button type="button" className="hover:text-primary transition-colors flex items-center justify-center p-1 rounded hover:bg-white/5">
                                <span className="material-symbols-outlined text-[20px]">format_bold</span>
                            </button>
                            <button type="button" className="hover:text-primary transition-colors flex items-center justify-center p-1 rounded hover:bg-white/5">
                                <span className="material-symbols-outlined text-[20px]">format_italic</span>
                            </button>
                            <button type="button" className="hover:text-primary transition-colors flex items-center justify-center p-1 rounded hover:bg-white/5">
                                <span className="material-symbols-outlined text-[20px]">emoji_emotions</span>
                            </button>
                        </div>
                        
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={!newComment.trim()}
                            className="px-6 py-2.5 bg-primary text-background-dark font-bold rounded-xl flex items-center gap-2 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(43,238,121,0.3)]"
                        >
                            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                            Post Comment
                        </motion.button>
                    </div>
                </div>
            </form>

            {/* Interactive Comment List */}
            <div className="space-y-4">
                <AnimatePresence>
                    {comments.map((comment) => (
                        <motion.div
                            key={comment.id}
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 350, damping: 25 }}
                            className="group p-5 bg-[#1e293b]/60 rounded-2xl border border-transparent hover:border-primary/30 hover:bg-[#1e293b] hover:shadow-[0_4px_25px_rgba(43,238,121,0.08)] transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    {/* Mock Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-primary flex items-center justify-center text-background-dark font-black text-lg shadow-[0_0_10px_rgba(43,238,121,0.3)] group-hover:shadow-[0_0_15px_rgba(43,238,121,0.6)] transition-shadow">
                                        {comment.username.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white tracking-wide group-hover:text-primary transition-colors">{comment.username}</h4>
                                        <p className="text-xs text-slate-500 font-medium">{comment.timestamp}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="text-slate-500 hover:text-blue-400 transition-colors p-1" title="Reply">
                                        <span className="material-symbols-outlined text-[18px]">reply</span>
                                    </button>
                                    <button className="text-slate-500 hover:text-red-400 transition-colors p-1" title="Report">
                                        <span className="material-symbols-outlined text-[18px]">flag</span>
                                    </button>
                                </div>
                            </div>
                            <p className="text-slate-300 ml-[52px] leading-relaxed">
                                {comment.message}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CommentsSection;
