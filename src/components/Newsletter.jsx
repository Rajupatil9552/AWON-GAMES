import React from 'react';

const Newsletter = () => {
    return (
        <div className="relative rounded-lg overflow-hidden bg-primary/5 border border-primary/20 p-8 md:p-12">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-9xl text-primary">mail</span>
            </div>
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
                <p className="text-slate-400 mb-8">Get the latest gaming news, patch notes, and exclusive rewards delivered straight to your inbox every Friday.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Enter your email address" type="email" />
                    <button className="bg-primary text-background-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Subscribe Now</button>
                </div>
                <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    );
};

export default Newsletter;
