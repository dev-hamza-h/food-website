"use client"

import Image from "next/image";
import menuOne from "@/assets/images/menu1.png";
import menuTwo from "@/assets/images/menu2.png";
import menuThree from "@/assets/images/menu3.png";
import menuFour from "@/assets/images/menu4.png";


export default function Menu() {
  return (
    <section className="px-4">
      <div className="text-center p-8">
        <p className="text-yellow-400 font-semibold mt-20 text-4xl">
          Our menu
        </p>
        <h1 className="font-bold text-5xl mt-2">
          Our Popular Menu
        </h1>
        <p className="text-xl mt-4 font-semibold text-gray-500">
          Explore our delightful selection of popular dishes, crafted with care for every taste
        </p>
        <p className="text-xl font-semibold text-gray-500">
          Indulge in flavors that are sure to satisfy and bring joy to every meal
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-10">
        {/* First Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110 ">
          <div className="bg-gray-100 p-4 sm:p-6">
            <Image
              src={menuOne}
              alt="Mie Ramen"
              className="w-full h-auto object-contain rounded-t-lg"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="font-bold text-lg">Mie Ramen</h2>
            <p className="text-gray-500">A savory ramen bowl packed with rich flavors and fresh ingredients</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">$28.2</span>
              <span className="text-yellow-400 text-2xl">&#9829;</span>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110 ">
          <div className="bg-gray-100 p-4 sm:p-6">
            <Image
              src={menuTwo}
              alt="Salad Tahu"
              className="w-full h-auto object-contain rounded-t-lg"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="font-bold text-lg">Salad Tahu</h2>
            <p className="text-gray-500">A healthy mix of fresh vegetables and tofu, perfect for a light meal</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">$25.4</span>
              <span className="text-yellow-400 text-2xl">&#9829;</span>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110 ">
          <div className="bg-gray-100 p-4 sm:p-6">
            <Image
              src={menuThree}
              alt="Roti Bakar"
              className="w-full h-auto object-contain rounded-t-lg"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="font-bold text-lg">Roti Bakar</h2>
            <p className="text-gray-500">Delicious toasted bread filled with sweet and savory goodness</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">$30.5</span>
              <span className="text-yellow-400 text-2xl">&#9829;</span>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110 ">
          <div className="bg-gray-100 p-4 sm:p-6">
            <Image
              src={menuFour}
              alt="Spaghetti"
              className="w-full h-auto object-contain rounded-t-lg"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="font-bold text-lg">Spaghetti</h2>
            <p className="text-gray-500">Classic Italian pasta with a flavorful tomato-based sauce</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">$24.2</span>
              <span className="text-yellow-400 text-2xl">&#9829;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
