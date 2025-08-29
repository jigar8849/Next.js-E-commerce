"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <div className="bg-gray-100 py-20 px-6 text-center">
      {/* Small top text */}
      <p className="text-xs tracking-widest text-gray-600 mb-2">ADVAND SUB</p>

      {/* Main heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Have a project in mind? Let&apos;s talk.
      </h2>

      {/* Sub text */}
      <p className="text-gray-800 font-medium mb-1">Didn&apos;t find your answer?</p>
      <p className="text-gray-500 mb-8">Don’t hesitate to contact us</p>

      {/* Button */}
      <Link
        href="/contact"
        className="inline-block px-8 py-3 border border-gray-800 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
      >
        CONTACT US
      </Link>
    </div>
  );
}
