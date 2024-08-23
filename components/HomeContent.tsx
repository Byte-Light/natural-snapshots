// components/HomeContent.tsx
import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col items-center space-y-2">
        <span className="text-green-500">N<span className="text-yellow-500">a</span><span className="text-black">t</span><span className="text-red-500">u</span><span className="text-purple-500">r</span><span className="text-cyan-500">a</span><span className="text-blue-500">l</span></span>
        <span className="text-black">S<span className="text-green-500">n</span><span className="text-purple-500">a</span><span className="text-cyan-500">p</span><span className="text-blue-500">s</span><span className="text-red-500">h</span><span className="text-yellow-500">o</span><span className="text-purple-500">t</span><span className="text-black">s</span></span>
      </h1>
      <ul className="text-black text-lg md:text-xl lg:text-2xl mt-6 list-disc space-y-2">
        <li>Photography</li>
        <li>Graphics Design</li>
        <li>Video Editing</li>
      </ul>
    </div>
  );
};

export default HomeContent;
