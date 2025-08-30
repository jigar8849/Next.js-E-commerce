'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="flex justify-center gap-6 p-8 text-gray-800 max-w-7xl mx-auto flex-wrap">
      {/* Address */}
      <div className="flex flex-col items-center text-center max-w-xs mb-6 md:mb-0">
        <FaMapMarkerAlt size={30} className="mb-2 text-gray-700 hover:text-pink-500 transition duration-300" aria-label="Location Icon" />
        <h3 className="font-semibold text-lg mb-1">Address</h3>
        <p className="text-sm leading-relaxed">
          Copley, South Australia 5732,<br />
          Australia.
        </p>
      </div>

      {/* Call Us */}
      <div className="flex flex-col items-center text-center max-w-xs mb-6 md:mb-0">
        <FaPhoneAlt size={30} className="mb-2 text-gray-700 hover:text-pink-500 transition duration-300" aria-label="Phone Icon" />
        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
        <p className="text-sm leading-relaxed">+ (02) 8771 3859</p>
        <p className="text-sm leading-relaxed">+ (07) 4088 1324</p>
      </div>

      {/* Open */}
      <div className="flex flex-col items-center text-center max-w-xs mb-6 md:mb-0">
        <FaCheckCircle size={30} className="mb-2 text-gray-700 hover:text-pink-500 transition duration-300" aria-label="Open Hours Icon" />
        <h3 className="font-semibold text-lg mb-1">Open</h3>
        <p className="text-sm leading-relaxed">Mon - Fri: 8am - 4pm</p>
        <p className="text-sm leading-relaxed">Sat - Sun: 9am - 5pm</p>
      </div>

      {/* Emails */}
      <div className="flex flex-col items-center text-center max-w-xs">
        <FaEnvelope size={30} className="mb-2 text-gray-700 hover:text-pink-500 transition duration-300" aria-label="Email Icon" />
        <h3 className="font-semibold text-lg mb-1">Emails</h3>
        <p className="text-sm leading-relaxed">example@example.com</p>
        <p className="text-sm leading-relaxed">example@example.com</p>
      </div>
    </section>
  );
};

export default ContactInfo;
