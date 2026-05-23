"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 glassmorphism !rounded-none !border-t-0 !border-l-0 !border-r-0">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/#home" className="text-2xl md:text-3xl font-bold text-deep-gold text-glow font-serif">
            Lovaly Dream Resort
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/#home" className="text-light-accent hover:text-deep-gold transition duration-300">Home</Link>
          <Link href="/#about" className="text-light-accent hover:text-deep-gold transition duration-300">About</Link>
          <Link href="/#services" className="text-light-accent hover:text-deep-gold transition duration-300">Services</Link>
          <Link href="/#gallery" className="text-light-accent hover:text-deep-gold transition duration-300">Gallery</Link>
          <Link href="/#contact" className="text-light-accent hover:text-deep-gold transition duration-300">Contact</Link>
          <Link href="/#book" className="bg-emerald-green text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-glow">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;