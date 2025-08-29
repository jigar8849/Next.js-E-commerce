import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface ProductCardProps {
  image: StaticImageData | string;
  brand: string;
  title: string;
  price: string | number;
  href?: string; // product link
}

export default function ProductCard({
  image,
  brand,
  title,
  price,
  href = "/product",
}: ProductCardProps) {
  return (
    <div className="bg-white w-fit rounded-lg shadow hover:shadow-lg transition overflow-hidden shadow-2xl">
      <Link href={href}>
        {/* ✅ Image wrapper with fixed height */}
        <div className="relative w-70 h-90">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Wishlist Button */}
          <button
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* ✅ Product Info below image */}
        <div className="p-4 ">
          <p className="text-lg text-gray-500">{brand}</p>
          <h3 className="text-xl  font-semibold">{title}</h3>
          <p className="text-base font-bold text-gray-900">${price}</p>
        </div>
      </Link>
    </div>
  );
}
