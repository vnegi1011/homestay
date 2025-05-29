'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const lat = 30.578278;
  const lng = 79.0325524;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <footer className="bg-primary text-white p-4 text-center flex flex-col gap-4 items-center">

      {/* Map container */}
      <div className="w-full max-w-md h-60 relative rounded overflow-hidden shadow-md bg-gray-300">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-sm animate-pulse">
            Loading map...
          </div>
        )}
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          loading="lazy"
          className={`${mapLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => setMapLoaded(true)}
          src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        />
      </div>

      <a
        href={`https://maps.google.com/?q=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-2 bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-accent hover:text-white transition">
          Show on Google Maps
        </button>
      </a>

            <div>
        <p>&copy; 2025 Kedar Darshan & Umesh Homestay. All rights reserved.</p>
        <p>Address: Near Thumby Aviation Helipad Jammu Kedarnath Road, Phata, Rudraprayag</p>
        <p>Contact: +91 96391 96330 | Email: info@gmail.com</p>
        <p>
          <a
            href="https://www.facebook.com/csbsrinagar"
            className="hover:text-accent underline"
          >
            Facebook
          </a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
