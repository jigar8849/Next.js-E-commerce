import Image from "next/image";
import women1 from "../../../public/assets/collection1.jpg";
import women2 from "../../../public/assets/collection2.jpg";
import women3 from "../../../public/assets/collection3.jpg";

const Collection = () => {
  const womenCollection = [women1, women2, women3];

  return (
    <div>
      <p className="flex items-center justify-center mt-15 mb-5 text-red-500 sm:text-sm md:pt-10 md:text-xl">
        BLOSSOM INTO STYLE: OUR SPRING FASHION PICKS
      </p>
      <h2 className="flex items-center justify-center text-5xl font-semibold sm:text-2xl md:text-6xl md:font-semibold">
        The Spring Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 justify-items-center mt-10 pb-20">
        {womenCollection.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Collection ${index + 1}`}
            className="rounded-xl object-cover"
            width={400}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
