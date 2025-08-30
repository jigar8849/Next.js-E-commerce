import Image from "next/image";
import women1 from "../../../public/assets/collection1.jpg";
import women2 from "../../../public/assets/collection2.jpg";
import women3 from "../../../public/assets/collection3.jpg";

const Collection = () => {
  const womenCollection = [women1, women2, women3];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Subtitle */}
      <p className="text-center text-sm sm:text-base md:text-lg text-red-500 uppercase tracking-wide">
        Blossom Into Style: Our Spring Fashion Picks
      </p>

      {/* Title */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-3">
        The Spring Collection
      </h2>

      {/* Image Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {womenCollection.map((img, index) => (
          <div key={index} className="w-full aspect-[4/5] relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <Image
              src={img}
              alt={`Collection ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
