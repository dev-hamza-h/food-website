"use client";

import Image from "next/image";
import OrderPic from "@/assets/images/order 1.png";
import DeliveryPic from "@/assets/images/delivery 1.png";
import QualityPic from "@/assets/images/courier 1.png";

export default function HowItWork() {
  return (
    <section className="px-4">
      {/* Title Section */}
      <div className="text-center p-20">
        <p className="text-yellow-400 text-4xl font-semibold mt-8">How it works</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          What We Serve
        </h1>
        <p className="text-lg md:text-xl mt-8 font-semibold text-gray-500">
          Product Quality Is Our Priority, And Always Guarantees
        </p>
        <p className="text-lg md:text-xl font-semibold text-gray-500">
          Halal And Safety Until It Is In Your Hands.
        </p>
      </div>

      {/* Image and Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2 text-center">
        {/* Easy To Order */}
        <div>
          <Image src={OrderPic} alt="order photo" quality={100} className="transform transition-transform duration-300 ease-in-out hover:scale-110 mx-auto" objectFit="contain" />
          <p className="mt-4 text-2xl font-bold">Easy To Order</p>
          <p className="text-gray-500">You only order through the app</p>
        </div>

        {/* Fastest Delivery */}
        <div>
          <Image src={DeliveryPic} alt="Delivery photo" quality={100} className="transform transition-transform duration-300 ease-in-out hover:scale-110 mx-auto" objectFit="contain" />
          <p className="mt-4 text-2xl font-bold">Fastest Delivery</p>
          <p className="text-gray-500">Delivery will be on time</p>
        </div>

        {/* Best Quality */}
        <div>
          <Image src={QualityPic} alt="Quality photo" quality={100} className="transform transition-transform duration-300 ease-in-out hover:scale-110 mx-auto" objectFit="contain" />
          <p className="mt-4 text-2xl font-bold">Best Quality</p>
          <p className="text-gray-500">The best quality of food for you</p>
        </div>
      </div>
    </section>
  );
}
