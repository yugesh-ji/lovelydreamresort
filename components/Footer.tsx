import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div className="text-center md:text-left max-w-sm">
                    <h4 className="text-2xl font-serif font-bold text-deep-gold mb-4 text-glow">Lovaly Dream Resort</h4>
                    <p className="text-gray-400 font-light mb-6">Your Ultimate Getaway for Stay, Dine & Relax in Rohtas.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-deep-gold transition"><Facebook className="h-5 w-5" /></a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-deep-gold transition"><Instagram className="h-5 w-5" /></a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-deep-gold transition"><Twitter className="h-5 w-5" /></a>
                    </div>
                </div>
                
                <div className="text-center md:text-right space-y-4">
                    <div className="flex items-center justify-center md:justify-end text-gray-300">
                        <MapPin className="w-5 h-5 text-deep-gold mr-3" />
                        <p>Near Patanwa Govt Polytechnic College, Indrapuri, Rohtas (Bihar)</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end text-gray-300">
                        <Phone className="w-5 h-5 text-deep-gold mr-3" />
                        <a href="tel:8797550731" className="hover:text-deep-gold transition">8797550731</a>
                    </div>
                    <div className="flex items-center justify-center md:justify-end text-gray-300">
                        <Mail className="w-5 h-5 text-deep-gold mr-3" />
                        <a href="mailto:lovelydreamresort@gmail.com" className="hover:text-deep-gold transition">lovelydreamresort@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Lovaly Dream Resort. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;