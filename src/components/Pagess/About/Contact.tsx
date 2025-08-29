"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-red-500 text-sm tracking-wide uppercase mb-2">
          Questions?
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Send us an email
        </h2>

        <form className="flex flex-col gap-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-fit px-8 py-3 mt-2 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            SEND →
          </button>
          <p>This site is protected by reCAPTCHA and the Google <span className="text-red-500">Privacy Policy</span> and <span className="text-red-500">Terms of Service</span> apply.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
