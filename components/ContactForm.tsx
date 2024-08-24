import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faTwitter, faFacebook, faBehance, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Prevent FontAwesome from adding its CSS automatically
config.autoAddCss = false;

// Add icons to the library
library.add(faMapMarkerAlt, faPhoneAlt, faEnvelope, faDribbble, faTwitter, faFacebook, faBehance, faYoutube);

const ContactForm: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg">
            <h2 className="text-center text-3xl font-extrabold text-white mb-10">
                DROP ME A <span className="text-yellow-500">LINE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-gray-800 p-8 text-center rounded-lg shadow-xl">
                    <FontAwesomeIcon icon="map-marker-alt" size="2x" className="text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">ADDRESS</h3>
                    <p className="text-gray-400">23 Ipsum street, New York</p>
                </div>
                <div className="bg-gray-800 p-8 text-center rounded-lg shadow-xl">
                    <FontAwesomeIcon icon="phone-alt" size="2x" className="text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">PHONE</h3>
                    <p className="text-gray-400">+12 345 6789</p>
                </div>
                <div className="bg-gray-800 p-8 text-center rounded-lg shadow-xl">
                    <FontAwesomeIcon icon="envelope" size="2x" className="text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">EMAIL</h3>
                    <p className="text-gray-400">
                        <a href="mailto:info@themewagon.com" className="text-yellow-500 hover:underline">info@themewagon.com</a>
                    </p>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex items-center justify-center">
                    <p className="text-center text-gray-500">
                        Sorry! Something went wrong. This page didn't load Google Maps correctly. See the JavaScript console for technical details.
                    </p>
                </div>
                <div className="bg-gray-700 p-8 rounded-lg shadow-xl">
                    <form className="flex flex-col space-y-6">
                        <input 
                            type="text" 
                            placeholder="Your name" 
                            className="border border-gray-600 p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                        />
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="border border-gray-600 p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                        />
                        <textarea 
                            placeholder="Write your message here..." 
                            className="border border-gray-600 p-3 rounded bg-gray-800 text-white placeholder-gray-400 h-32"
                        ></textarea>
                        <button 
                            type="submit" 
                            className="bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600 transition duration-300"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-12 flex justify-center space-x-6">
                <a href="#" className="text-yellow-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={["fab", "dribbble"]} size="2x" />
                </a>
                <a href="#" className="text-yellow-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
                <a href="#" className="text-yellow-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
                <a href="#" className="text-yellow-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={["fab", "behance"]} size="2x" />
                </a>
                <a href="#" className="text-yellow-500 hover:text-white transition duration-300">
                    <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
                </a>
            </div>
        </div>
    );
}

export default ContactForm;
