import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10.5c-1.657 0-3 .843-3 1.875 0 .945 1.343 1.875 3 1.875s3-.93 3-1.875c0-1.032-1.343-1.875-3-1.875z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14.25v4.5M16.5 9.75a4.5 4.5 0 00-9 0v1.5h9v-1.5zm4.5 0v1.5h-1.5V9.75a6 6 0 00-12 0v1.5H3v-1.5a6 6 0 0112 0h6z"
        />
      </svg>
    ),
    title: 'PHOTOGRAPHER',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.5-4.5M10.5 10.5L15 6m-6 12h6M3 9a4.5 4.5 0 014.5-4.5h9A4.5 4.5 0 0121 9v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 18V9z"
        />
      </svg>
    ),
    title: 'GRAPHICS DESIGN',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12v-6m6 6v6H6v-6h12z"
        />
      </svg>
    ),
    title: 'VIDEO EDITING',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-2xl font-semibold mb-8">
        I DO AMAZING THINGS FOR CLIENTS
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="flex justify-center items-center w-24 h-24 mx-auto mb-4 border border-red-500 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
