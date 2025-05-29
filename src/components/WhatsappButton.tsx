'use client'; // This file is client only

import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919639196330?text=Hii-query-for-Umesh-Homestay"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-4
        right-4
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        p-4
        shadow-lg
        transition
        flex
        items-center
        justify-center
        z-50
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
