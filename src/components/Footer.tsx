'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <footer className="bg-primary text-white p-4 text-center flex flex-col gap-4 items-center">

      <div>
        <p></p>
      </div>
      {/* Map container */}
      <div className="w-full max-w-md h-60 relative rounded overflow-hidden shadow-md bg-gray-300">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-sm animate-pulse">
            Loading map...
          </div>
        )}
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.970562861111!2d79.0324969!3d30.578376400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390837c811997023%3A0xbc159c6d9b23aa44!2sKedar%20darshan%20%26%20Umesh%20home%20stay!5e0!3m2!1sen!2sin!4v1748660850070!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        onLoad={() => setMapLoaded(true)}
        loading="lazy" />
      </div>

      <a
        href={`https://maps.app.goo.gl/ZixQg9KkQDuxWnbg8`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-2 bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-accent hover:text-white transition">
          Show on Google Maps
        </button>
      </a>

      <div>
        <p>&copy; 2025 Kedar Darshan & Umesh Homestay. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
