import women1 from "../../../public/assets/trandingproduct1.png";
import women2 from "../../../public/assets/trandingproduct2.png";
import women3 from "../../../public/assets/trandingproduct3.png";
import ProductCard from "../AllCardss/Home/TrandingCard";

function BestSelling() {
  const bestSellingProducts = [
    {
      image: women1,
      brand: "Cozy Knits Co",
      title: "Cozy Knit Sweater",
      price: 49.99,
      href: "/products/mens-shirt",
    },
    {
      image: women2,
      brand: "Rebel Rider",
      title: "Leather Biker Jacket",
      price: 79.99,
      href: "/products/womens-dress",
    },
    {
      image: women3,
      brand: "Cashmere Cozy",
      title: "Cashmere Knit Cardigan",
      price: 59.99,
      href: "/products/sneakers",
    },
  ];

  return (
    <div className="bg-pink-50 mt-0">
      <p className="flex items-center justify-center mt-15 mb-5 text-red-500 sm:text-sm md:pt-10 md:text-xl">
        Top Picks for Fashion-Forward Shoppers
      </p>
      <h2 className="flex items-center justify-center text-5xl font-semibold sm:text-2xl md:text-8xl md:font-semibold">
        Best Selling
      </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 justify-items-center mt-10 pb-20">
           {bestSellingProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                brand={product.brand}
                title={product.title}
                price={product.price}
                href={product.href}
              />
            ))}
          </div>
    </div>
  );
}

export default BestSelling;
