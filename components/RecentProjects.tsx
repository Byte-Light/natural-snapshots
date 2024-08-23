import React from 'react';

interface Project {
  imageSrc: string;
  altText: string;
}

const projects: Project[] = [
  { imageSrc: '/images/project1.jpg', altText: 'Hot air balloon' },
  { imageSrc: '/images/project2.jpg', altText: 'Sparkler' },
  { imageSrc: '/images/project3.jpg', altText: 'Heart drawing' },
  { imageSrc: '/images/project4.jpg', altText: 'Frog' },
  { imageSrc: '/images/project5.jpg', altText: 'Project 5' },
  { imageSrc: '/images/project6.jpg', altText: 'Project 6' },
  { imageSrc: '/images/project7.jpg', altText: 'Project 7' },
  { imageSrc: '/images/project8.jpg', altText: 'Project 8' },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-gray-700">RECENT</h2>
        <h1 className="text-3xl font-bold text-red-500">POROJECTS</h1>
        <div className="mt-4">
          <span className="inline-block border-t border-gray-300 w-16"></span>
          <span className="inline-block mx-4 text-gray-500">⭣</span>
          <span className="inline-block border-t border-gray-300 w-16"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <img
              src={project.imageSrc}
              alt={project.altText}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
