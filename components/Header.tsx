// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-6 shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Natural Snapshots
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-xl font-light mt-2 opacity-80">
          Capturing the beauty of nature, one shot at a time
        </p>
      </div>
    </header>
  );
};

export default Header;
