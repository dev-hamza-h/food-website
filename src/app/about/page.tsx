import Image from 'next/image';
import aboutPic from "@/assets/images/aboutPic.png";
import rivewPic from "@/assets/images/reviewAbout.jpg";

const About = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center">

        {/* Left Side: Image Section */}
        <div className="w-full lg:w-1/2 ml-2">
          <Image
            src={aboutPic}
            alt="Food Image"
            className="rounded-lg w-full h-auto max-w-md tilt-on-hover" 
            width={500}
            height={500}
          />
        </div>

        {/* Right Side: Customer Review Section */}
        <div className="w-full lg:w-1/2 lg:ml-8 mt-10 lg:mt-0 mr-4">
          <h3 className="text-yellow-300 text-2xl font-medium mb-2 ">What they say</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-4">What Our Customers Say About Us</h2>

          <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-start space-x-4 mt-14 vibrate-on-hover">
            <Image
              src={rivewPic}
              alt="Customer"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div>
              <h4 className="text-lg font-semibold">Amelia</h4>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="mt-2 text-gray-700">
                The food was absolutely delicious, and the delivery was super quick! Highly satisfied with the service and will definitely order again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
