"use client"; // Required for client-side hooks and animations

import { useState, useEffect } from 'react';
//import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Changed from next/router
import dynamic from 'next/dynamic'; // <-- Importe o dynamic
import { SiteHeader } from './site-header';
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });
import { ThemeProvider } from './theme-provider';

const navItems = [
  { name: 'Sobre', path: '#about' },
  { name: 'Projetos', path: '#projects' },
  { name: 'Contato', path: '#contact' },
  { name: 'Download CV', path: '/cv.pdf', download: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Replaces useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to check active link
  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return false; // Hash links won't match pathname
    }
    return pathname === path;
  };

  return (
    <>
    <SiteHeader />
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
       <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Marcelo DEV
            </Link>
          </MotionDiv>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <MotionDiv
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  download={item.download}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              </MotionDiv>
            ))}
          </nav>
        </div>
      </header> 
            
      <main className="pt-20">{children}</main>
    </div>
   </>
  );
}