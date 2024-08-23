// components/AboutMe.tsx
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-cyan-500 py-10 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4">
        A LITTLE ABOUT ME
      </h2>
      <p className="text-black text-center max-w-3xl text-sm md:text-base lg:text-lg px-4">
        I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a waterfall or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.
      </p>
    </section>
  );
};

export default AboutMe;
