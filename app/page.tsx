"use client";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesCards from '../components/ServicesCards';
import GalleryGrid from '../components/GalleryGrid';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-dark-tone text-light-accent min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesCards />
      <GalleryGrid />
      <ContactForm />
      <Footer />
    </main>
  );
}