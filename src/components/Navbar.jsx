import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { img } from '../assets/assest';

const Navbar = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full px-[4%] py-4 h-16 md:h-20 flex justify-between items-center bg-[#fafafa]/95 backdrop-blur-md z-1000 border-b border-[#222]">
      <div className="flex items-center gap-2 md:gap-4">

        <div className="relative h-6 md:h-10 w-30 md:w-40">
          <AnimatePresence mode="wait">
            {showFirst ? (
              <motion.a
                key="mainlogo"
                href="https://mindstory.in/"
                className="cursor-pointer absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <img
                  src={img.mainlogo}
                  alt="2151 Logo"
                  className="h-6 md:h-10 w-28 md:w-40 object-contain object-left"
                />
              </motion.a>
            ) : (
              <motion.div
                key="mindstorylogo"
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <img
                  src={img.mindstorylogo}
                  alt="Mindstory Logo"
                  className="h-20 md:h-10 w-28 md:w-40 object-contain object-left"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>


      <a href="https://mindstory.in/contact-us/"
        className="bg-[#ff6b00] hover:bg-white hover:text-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all hover:border hover:border-amber-500 duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
      >
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;