
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Antigravity from '../components/Antigravity';

const HeroSection = () => {
    const containerRef = useRef(null);
    const headlineRef = useRef(null);

    const descriptionText = "Awon Games is your destination for exciting browser games. Discover action, racing, puzzle, and multiplayer games that you can play instantly without downloads.";
    const descriptionChars = descriptionText.split('');

    useEffect(() => {
        // Create audio elements pool to allow rapid overlapping ticks
        const typingSounds = Array.from({ length: 3 }).map(() => {
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-mechanical-keyboard-soft-single-keystroke-2568.mp3');
            audio.volume = 0.2;
            return audio;
        });

        let soundIndex = 0;
        const playTypingSound = () => {
            const audio = typingSounds[soundIndex];
            audio.currentTime = 0;
            audio.play().catch(() => {
                // Browsers block autoplay by default without prior user interaction.
            });
            soundIndex = (soundIndex + 1) % typingSounds.length;
        };

        const ctx = gsap.context(() => {
            // Heading Stagger Animation
            gsap.fromTo('.hero-title span',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1, delay: 0.1 }
            );

            // Paragraph Typing Animation (left-to-right letter effect)
            gsap.fromTo('.hero-description span',
                { x: -20, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.1,
                    ease: 'power2.out',
                    stagger: 0.02,
                    delay: 1.2
                }
            );

            // Sound Engine Timing Alignment 
            const totalChars = descriptionChars.length;
            let tickCount = 0;
            let intervalTimer;

            const startTimerId = setTimeout(() => {
                intervalTimer = setInterval(() => {
                    playTypingSound();
                    tickCount++;
                    if (tickCount >= totalChars) {
                        clearInterval(intervalTimer);
                    }
                }, 30); // Approximate match to stagger spacing
            }, 1200);

            // Buttons fade in after text finishes
            gsap.fromTo('.hero-buttons',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 4.5 }
            );

            // Cleanup attached to context object
            return () => {
                clearTimeout(startTimerId);
                clearInterval(intervalTimer);
            };

        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, [descriptionChars.length]);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-background-dark py-20 lg:py-40">

            {/* Antigravity Background (absolute position) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Antigravity
                    count={400}
                    magnetRadius={8}
                    ringRadius={10}
                    waveSpeed={0.5}
                    waveAmplitude={1.5}
                    particleSize={0.8}
                    lerpSpeed={0.06}
                    color="#2bee79"
                    autoAnimate={true}
                    particleVariance={1.5}
                    rotationSpeed={0.2}
                    depthFactor={1.2}
                    pulseSpeed={2}
                    particleShape="capsule"
                    fieldStrength={10}
                />
            </div>

            {/* HeroContent */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                <div className="space-y-6 max-w-4xl mx-auto">
                    <h1
                        ref={headlineRef}
                        className="hero-title text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase font-display flex flex-wrap justify-center"
                    >
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">A</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-teal-400 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">W</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-teal-400 to-green-400 drop-shadow-[0_0_20px_rgba(43,238,121,0.4)]">O</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-tr from-green-400 to-green-500 drop-shadow-[0_0_20px_rgba(43,238,121,0.4)] mr-4 md:mr-6 lg:mr-8">N</span>

                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">G</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">a</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">m</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">e</span>
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">s</span>
                    </h1>

                    <p className="hero-description text-xl md:text-2xl text-slate-300 max-w-[700px] mx-auto font-medium drop-shadow-md leading-relaxed">
                        {descriptionChars.map((char, index) => (
                            <span key={index} className="inline-block opacity-0" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                                {char}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <button
                        className="hover:scale-105 hover:shadow-[0_0_25px_rgba(43,238,121,0.5)] active:scale-95 bg-primary text-background-dark px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 group transition-all"
                    >
                        Play Now
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                            sports_esports
                        </span>
                    </button>

                    <button
                        className="hover:scale-105 hover:bg-white/10 active:scale-95 px-10 py-4 border border-white/20 rounded-full font-bold text-lg text-white backdrop-blur-sm transition-all shadow-lg"
                    >
                        Watch Trailer
                    </button>
                </div>
            </div>

            {/* Top Gradient Overlay to blend with navbar */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background-dark to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default HeroSection;
