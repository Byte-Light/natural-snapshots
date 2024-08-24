// components/AboutMe.tsx
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 flex flex-col items-center text-white">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
        A LITTLE ABOUT ME
      </h2>
      <p className="text-center max-w-2xl text-base md:text-lg lg:text-xl px-6 leading-relaxed">
        I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a waterfall or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.
      </p>
    </section>
  );
};

export default AboutMe;
