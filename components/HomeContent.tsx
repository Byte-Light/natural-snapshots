// components/HomeContent.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const HomeContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="block">
          <span className="text-green-400">N</span>
          <span className="text-yellow-400">a</span>
          <span className="text-blue-400">t</span>
          <span className="text-red-400">u</span>
          <span className="text-purple-400">r</span>
          <span className="text-cyan-400">a</span>
          <span className="text-pink-400">l</span>
        </span>
        <span className="block mt-2">
          <span className="text-green-400">S</span>
          <span className="text-yellow-400">n</span>
          <span className="text-blue-400">a</span>
          <span className="text-red-400">p</span>
          <span className="text-purple-400">s</span>
          <span className="text-cyan-400">h</span>
          <span className="text-pink-400">o</span>
          <span className="text-green-400">t</span>
          <span className="text-yellow-400">s</span>
        </span>
      </motion.h1>

      <motion.ul 
        className="text-lg md:text-2xl lg:text-3xl mt-8 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      >
        <li className="hover:text-green-400 transition duration-300 ease-in-out">Photography</li>
        <li className="hover:text-yellow-400 transition duration-300 ease-in-out">Graphics Design</li>
        <li className="hover:text-blue-400 transition duration-300 ease-in-out">Video Editing</li>
      </motion.ul>
    </div>
  );
};

export default HomeContent;
