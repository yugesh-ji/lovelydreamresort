"use client";
import { motion } from 'framer-motion';
import { Hotel, Utensils, CalendarDays } from 'lucide-react';

const services = [
  {
    title: 'Luxury Hotel Rooms',
    icon: <Hotel className="w-12 h-12 text-deep-gold" />,
    description: 'Experience the comfort and elegance of our luxurious hotel rooms with premium amenities.',
  },
  {
    title: 'Fine Dining Restaurant',
    icon: <Utensils className="w-12 h-12 text-deep-gold" />,
    description: 'Indulge in a culinary journey with our multi-cuisine offerings prepared by expert chefs.',
  },
  {
    title: 'Resort & Event Spaces',
    icon: <CalendarDays className="w-12 h-12 text-deep-gold" />,
    description: 'Host your unforgettable events in our beautiful resort and spacious event spaces.',
  },
];

const ServicesCards = () => {
  return (
    <section id="services" className="py-24 bg-dark-tone relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-deep-gold/10 via-dark-tone to-dark-tone"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-deep-gold mb-2">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-light-accent">Services & Amenities</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-10 text-center flex flex-col items-center group cursor-pointer"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-6 p-4 rounded-full bg-dark-tone/50 border border-deep-gold/20 group-hover:border-deep-gold/60 transition duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif font-semibold text-light-accent mb-4">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;