"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus('error');
            return;
        }
        setStatus('success');
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setStatus('idle');
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 bg-dark-tone relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-emerald-green/10 via-dark-tone to-dark-tone"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-deep-gold mb-2">Get in touch</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-serif text-light-accent">Contact Us</h3>
                </div>
                <div className="max-w-3xl mx-auto glassmorphism p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-lg p-4 text-light-accent placeholder-gray-500 focus:outline-none focus:border-deep-gold transition"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-lg p-4 text-light-accent placeholder-gray-500 focus:outline-none focus:border-deep-gold transition"
                                required
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-lg p-4 text-light-accent placeholder-gray-500 focus:outline-none focus:border-deep-gold transition min-h-[150px]"
                            required
                        />
                        {status === 'error' && <p className="text-red-400 text-center">Please fill out all fields.</p>}
                        {status === 'success' && <p className="text-emerald-400 text-center">Message sent successfully!</p>}
                        
                        <motion.button
                            type="submit"
                            className="bg-deep-gold text-dark-tone font-semibold py-4 rounded-lg hover:bg-yellow-500 transition duration-300 w-full md:w-auto md:px-12 mx-auto"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;