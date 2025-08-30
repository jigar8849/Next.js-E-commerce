import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface ProductCardProps {
  image: StaticImageData | string;
  brand: string;
  title: string;
  price: string | number;
  href?: string;
}

export default function ProductCard({
  image,
  brand,
  title,
  price,
  href = "/product",
}: ProductCardProps) {
  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <Link href={href}>
        {/* Image Section */}
        <div className="relative w-full h-72 sm:h-64 md:h-72 lg:h-80">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 300px"
            priority
          />

          {/* Wishlist Icon */}
          <button
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Info Section */}
        <div className="p-4 text-center">
          <p className="text-sm text-gray-500">{brand}</p>
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mt-1">
            {title}
          </h3>
          <p className="text-lg font-bold text-gray-900 mt-2">${Number(price).toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}
