import BestSelling from "@/components/Home/BestSelling";
import Blog from "@/components/Home/Blog";
import Categories from "@/components/Home/Categories";
import Collection from "@/components/Home/Collection";
import Follow from "@/components/Home/Follow";
import Hero from "@/components/Home/Hero";
import Promo from "@/components/Home/Promo";
import Review from "@/components/Home/Review";
import Tranding from "@/components/Home/Tranding";
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <Promo />
        <Tranding />
        <BestSelling />
        <Collection />
        <Blog />
        <Review />
        <Follow />
        <Analytics />
      </main>
    </>
  );
}
