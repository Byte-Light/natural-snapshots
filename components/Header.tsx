// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-cyan-500 py-2">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
          Natural Snapshots
        </h1>
      </div>
    </header>
  );
};

export default Header;
