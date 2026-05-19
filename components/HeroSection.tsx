"use client";
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image with slow scale (parallax breathing) */}
            <motion.div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14d8379?q=80&w=2000&auto=format&fit=crop')" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-dark-tone/90"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
                <motion.h1 
                    className="text-5xl md:text-7xl font-bold mb-6 text-light-accent font-serif"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Welcome to <span className="text-deep-gold text-glow">Lovaly Dream Resort</span>
                </motion.h1>
                <motion.p 
                    className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    Your Ultimate Getaway for Stay, Dine & Relax in Rohtas
                </motion.p>
                <motion.a 
                    href="#book"
                    className="bg-deep-gold text-dark-tone font-semibold py-4 px-10 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] transition duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ y: -5 }}
                >
                    Experience Luxury
                </motion.a>
            </div>
        </section>
    );
};

export default HeroSection;