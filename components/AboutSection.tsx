"use client";
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-dark-tone text-light-accent overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop" alt="Resort view" className="object-cover w-full h-full" />
                            <div className="absolute inset-0 border-2 border-deep-gold/30 rounded-2xl m-4 pointer-events-none"></div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.3em] text-deep-gold mb-2">About Us</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Where Luxury Meets Comfort</h3>
                        <div className="w-20 h-1 bg-emerald-green mb-8"></div>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                            Welcome to Lovaly Dream Resort, an oasis of tranquility located in the heart of Rohtas. We offer top-notch hotel accommodations, a multi-cuisine dining experience, and a relaxing resort environment all seamlessly blended into one destination.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                            Whether you are here for a lavish staycation, an unforgettable event, or to indulge in exquisite culinary delights, our dedicated team is here to provide you with an ultimate premium getaway.
                        </p>
                        <button className="border border-deep-gold text-deep-gold px-8 py-3 rounded-full hover:bg-deep-gold hover:text-dark-tone transition duration-300">
                            Discover More
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;