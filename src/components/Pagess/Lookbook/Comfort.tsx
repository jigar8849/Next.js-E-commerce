// components/Comfort.tsx
import React from 'react';

const Comfort: React.FC = () => {
  return (
    <section className="bg-[#f7eaea] py-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm text-red-500 font-semibold tracking-widest mb-3">
          CHIC AND COMFORTABLE
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Style Meets Comfort In Every Outfit
        </h1>
        <p className="text-base text-gray-800 leading-relaxed">
          Chic doesn't have to compromise comfort. <br />
          Embrace style that feels as good as it looks. Our collection prioritizes.
        </p>
      </div>
    </section>
  );
};

export default Comfort;
