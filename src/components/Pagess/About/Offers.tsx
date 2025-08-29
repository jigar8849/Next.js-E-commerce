import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/assets/feature_free_shipping.png";
import Img2 from "../../../../public/assets/feature_quality_support.png";
import Img3 from "../../../../public/assets/feature_return_refund.png";
import Img4 from "../../../../public/assets/feature_gift_voucher.png";

const featuresDetails = [
  {
    image: Img1,
    title: "Free Shipping",
    description: "from all orders over $100",
  },
  {
    image: Img2,
    title: "Quality Support",
    description: "24/7 online feedback",
  },
  {
    image: Img3,
    title: "Return & Refund",
    description: "Return money within 30 days",
  },
  {
    image: Img4,
    title: "Gift Voucher",
    description: "20% off when you shop online",
  },
];

function Offers() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {featuresDetails.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={feature.image}
              alt={feature.title}
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
