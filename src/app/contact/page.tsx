import React from 'react';
import contactBG from '@/assets/images/contact.png';

const SubscribeContainer = () => {
  return (
    <div className="px-4 py-36">
      <section
        className="relative bg-center py-16 rounded-xl sm:mx-8 lg:mx-16 mx-auto md:px-8"
        style={{ backgroundImage: `url(${contactBG.src})` }}
      >
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 mt-4">
            Subscribe to get 50% discount price
          </h2>
          <form className="mt-6 flex justify-center">
            <div className="flex w-full sm:w-1/2">
              <input
                type="email"
                className="flex-1 p-4 rounded-l-lg focus:outline-none"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-2 py-2 rounded-r-lg hover:bg-green-700 focus:outline-none"
              >
                Order now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SubscribeContainer;