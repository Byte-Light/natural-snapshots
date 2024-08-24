import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center py-6">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 14h-1v-6h1v6zm-1.8-7c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm8.8 7h-1v-4.5c0-1.1-.9-2-2-2h-2v6h-1v-6h-2v-1h2v1h1v-1h3v7z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 14h-1v-6h1v6zm0-8h-1V8h1v4z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 14h-1v-6h1v6zm-1.8-7c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm8.8 7h-1v-4.5c0-1.1-.9-2-2-2h-2v6h-1v-6h-2v-1h2v1h1v-1h3v7z" />
                    </svg>
                </a>
            </div>
            <p className="text-gray-400 text-sm">
                All Rights Reserved. © 2024 <span className="text-yellow-500 font-semibold">ByteLight</span>
            </p>
        </footer>
    );
}

export default Footer;
