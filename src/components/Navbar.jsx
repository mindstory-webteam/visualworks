import React from 'react';
import { motion } from 'framer-motion';
import { img } from '../assets/assest';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-[4%] py-4 h-16 md:h-20 flex justify-between items-center bg-[#fafafa]/95 backdrop-blur-md z-1000 border-b border-[#222]">
      <div className="flex items-center gap-2 md:gap-4">
        <a href="https://mindstory.in/" className="cursor-pointer">
          <img
            src={img.mainlogo}
            alt="2151 Logo"
            className="h-6 md:h-10 w-auto object-contain"
          />
        </a>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-2 md:gap-4 border-l border-gray-300 pl-2 md:pl-4 h-7 md:h-8"
        >
          <img
            src={img.mindstorylogo}
            alt="Mindstory Logo"
            className="h-5 md:h-6 w-auto object-contain opacity-80"
          />
        </motion.div>
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