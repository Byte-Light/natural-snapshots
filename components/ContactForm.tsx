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
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-center text-2xl font-bold mb-8">
                DROP ME A <span className="text-red-600">LINE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
                    <FontAwesomeIcon icon="map-marker-alt" size="lg" className="text-red-600 mb-2" />
                    <h3 className="text-lg font-semibold">ADDRESS</h3>
                    <p>23 Ipsum street, New York</p>
                </div>
                <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
                    <FontAwesomeIcon icon="phone-alt" size="lg" className="text-red-600 mb-2" />
                    <h3 className="text-lg font-semibold">PHONE</h3>
                    <p>+12 345 6789</p>
                </div>
                <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
                    <FontAwesomeIcon icon="envelope" size="lg" className="text-red-600 mb-2" />
                    <h3 className="text-lg font-semibold">EMAIL</h3>
                    <p><a href="mailto:info@themewagon.com" className="text-blue-600 hover:underline">info@themewagon.com</a></p>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <p className="text-center text-gray-500">Sorry! Something went wrong. This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <form className="flex flex-col space-y-4">
                        <input type="text" placeholder="Your name" className="border border-gray-300 p-2 rounded" />
                        <input type="email" placeholder="Email address" className="border border-gray-300 p-2 rounded" />
                        <textarea placeholder="Write your message here..." className="border border-gray-300 p-2 rounded"></textarea>
                        <button type="submit" className="bg-red-600 text-white p-2 rounded hover:bg-red-700">Send message</button>
                    </form>
                </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
                <a href="#" className="text-red-600"><FontAwesomeIcon icon={["fab", "dribbble"]} size="lg" /></a>
                <a href="#" className="text-red-600"><FontAwesomeIcon icon={["fab", "twitter"]} size="lg" /></a>
                <a href="#" className="text-red-600"><FontAwesomeIcon icon={["fab", "facebook"]} size="lg" /></a>
                <a href="#" className="text-red-600"><FontAwesomeIcon icon={["fab", "behance"]} size="lg" /></a>
                <a href="#" className="text-red-600"><FontAwesomeIcon icon={["fab", "youtube"]} size="lg" /></a>
            </div>
        </div>
    );
}

export default ContactForm;
