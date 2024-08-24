"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  imageSrc: string;
  altText: string;
}

const projects: Project[] = [
  { imageSrc: '/images/project1.jpg', altText: 'Hot air balloon' },
  { imageSrc: '/images/project2.jpg', altText: 'Sparkler' },
  { imageSrc: '/images/project3.jpg', altText: 'Heart drawing' },
  { imageSrc: '/images/project4.jpg', altText: 'Frog' },
  { imageSrc: '/images/project5.jpg', altText: 'Flamingo' },
  { imageSrc: '/images/project6.jpg', altText: 'Fluffy duck' },
  { imageSrc: '/images/project7.jpg', altText: 'Flowers boom' },
  { imageSrc: '/images/project8.jpg', altText: 'Californica' },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="py-16 px-2 bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800">
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold text-gray-200 tracking-wide">RECENT</h2>
        <h1 className="text-4xl font-extrabold text-white">PROJECTS</h1>
        <div className="mt-6">
          <span className="inline-block border-t border-gray-400 w-16"></span>
          <span className="inline-block mx-4 text-white">⭣</span>
          <span className="inline-block border-t border-gray-400 w-16"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="relative transform hover:scale-105 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.1 }} // Enhanced scaling effect on hover
            whileTap={{ scale: 0.95 }}   // Slight scaling down on tap
            transition={{ duration: 0.3 }} // Smooth and responsive animation
          >
            <img
              src={project.imageSrc}
              alt={project.altText}
              className="w-full h-64 object-cover rounded-lg shadow-2xl transform hover:rotate-2 hover:translate-y-1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{project.altText}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
