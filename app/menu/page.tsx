"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, menuCategories, categoryImages } from './data';
import Image from 'next/image';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter menu items based on the selected category
  const filteredItems = activeCategory === "All" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  // Group items by category to render them in blocks
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuData>);

  return (
    <div className="min-h-screen bg-dark-tone flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Header Section */}
        <section className="text-center mb-12 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-deep-gold mb-4 text-glow"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-light-accent text-lg max-w-2xl mx-auto"
          >
            Discover a symphony of flavors at Lovely Family Restaurant. 
            From tantalizing starters to exquisite main courses, explore our diverse offerings.
          </motion.p>
        </section>

        {/* Category Filters */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-4 md:flex-wrap md:justify-center md:space-x-4 md:space-y-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={`whitespace-nowrap px-6 py-2 rounded-full border border-deep-gold transition-all duration-300 font-semibold ${
                activeCategory === "All"
                  ? "bg-deep-gold text-dark-tone shadow-glow"
                  : "text-deep-gold hover:bg-deep-gold/20"
              } md:mt-4`}
            >
              All Categories
            </button>
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full border border-deep-gold transition-all duration-300 font-semibold ${
                  activeCategory === category
                    ? "bg-deep-gold text-dark-tone shadow-glow"
                    : "text-deep-gold hover:bg-deep-gold/20"
                } md:mt-4`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Menu Items */}
        <section className="container mx-auto px-4 max-w-5xl">
          <AnimatePresence mode="popLayout">
            {Object.keys(groupedItems).map((category, idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="mb-16"
              >
                {/* Category Header with Image */}
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-8 group">
                  <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-all duration-500"></div>
                  <img
                    src={categoryImages[category]}
                    alt={category}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="glassmorphism px-8 py-3 rounded-xl border border-deep-gold/30">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-gold tracking-wider">
                        {category}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {groupedItems[category].map((item, itemIdx) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.05 }}
                      className="flex items-end justify-between group cursor-default"
                    >
                      <div className="flex-grow pr-4 relative overflow-hidden">
                        <div className="flex items-center space-x-3 bg-dark-tone relative z-10 pr-2">
                          {/* Veg/Non-Veg Indicator */}
                          <div className={`w-4 h-4 flex-shrink-0 rounded-sm border-2 flex items-center justify-center ${
                            item.type === 'veg' ? 'border-green-600' : 'border-red-600'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'
                            }`}></div>
                          </div>
                          
                          <span className="text-lg font-medium text-light-accent group-hover:text-deep-gold transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                        {/* Dotted Leader */}
                        <div className="absolute bottom-1.5 left-0 w-full border-b-2 border-dotted border-gray-600 z-0"></div>
                      </div>
                      
                      <div className="bg-dark-tone pl-2 relative z-10 flex-shrink-0">
                        <span className="text-lg font-bold text-emerald-500">
                          ₹{item.price.replace('/-', '')}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </main>

      <Footer />

      {/* Global CSS for hide-scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MenuPage;
