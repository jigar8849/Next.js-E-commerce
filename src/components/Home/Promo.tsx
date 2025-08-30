import PromoCard from "@/components/AllCardss/Home/PromoCard";
import women1 from "../../../public/assets/hero_image_2.png";
import women2 from "../../../public/assets/herowomen2.png";

export default function HomePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PromoCard
          subtitle="Seasonal Style Sensations"
          title="Unwrap The Hottest Trends Of The Year"
          description="Get ready for a wardrobe makeover like no other."
          image={women1}
        />
        <PromoCard
          subtitle="Elevate Your Style Game"
          title="Discover The Latest In Fashion"
          description="Unleash your inner fashionista with Rosyz."
          image={women2}
          reverse
        />
      </div>
    </div>
  );
}
