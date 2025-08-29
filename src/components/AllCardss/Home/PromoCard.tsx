import Image, { StaticImageData } from "next/image";

interface PromoCardProps {
  subtitle: string;
  title: string;
  description: string;
  image: StaticImageData | string; // <-- FIX here
  reverse?: boolean;
}

export default function PromoCard({
  subtitle,
  title,
  description,
  image,
  reverse,
}: PromoCardProps) {
  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row items-center gap-6 bg-pink-400 p-6 rounded-lg shadow-lg mt-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="flex-1">
        <h4 className="text-sm font-bold uppercase">
          {subtitle}
        </h4>
        <h2 className="text-3xl font-semibold my-2">{title}</h2>
        <p className="mb-4 text-sm">{description}</p>
        <a href="#" className="text-blue-500 font-semibold hover:underline">
          View More
        </a>
      </div>

      {/* Image */}
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
