"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroPic from "@/assets/images/hero.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in viewport
        } else {
          setIsVisible(false); // Reset animation when out of viewport
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentHeroRef = heroRef.current; // Copying the ref value to a variable

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <section className="bg-yellow-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Content */}
        <div
          ref={heroRef}
          className={`lg:w-1/2 text-center lg:text-left px-6 lg:px-24 mt-12 lg:mt-0 ${isVisible ? 'animate-slideIn' : ''}`}
        >
          <h1 className={`text-3xl lg:text-5xl font-bold text-gray-800 ${isVisible ? 'animate-slideIn' : ''}`}>
            Be The Fastest In <br /> Delivery Your <span className="text-yellow-500">Food</span>
          </h1>
          <p className={`mt-4 text-gray-600 text-base lg:text-lg ${isVisible ? 'animate-slideIn' : ''}`}>
            Fast Delivery, Fresh Food. Satisfaction Guaranteed.
          </p>
          <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600">
            Get Started
          </button>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 transform hover:scale-110 transition duration-300 ease-in-out">
            <Image src={HeroPic} alt="Delicious Food" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
