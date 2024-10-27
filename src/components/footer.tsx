import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "@/assets/images/logo.png"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-yellow-50 py-10 text-center md:text-left mt-48 px-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          {/* Let’sFood text with image logo */}
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold">Let&apos;’s Food</h2>
            <Image 
              src={logo}
              alt="Cup Logo" 
              className="w-8 h-8 ml-2"
            />
          </div>
          <p>Elite Plaza, Central Business Park, Capital City</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-black hover:text-yellow-500">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href="#" className="text-black hover:text-yellow-500">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a href="#" className="text-black hover:text-yellow-500">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul>
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Career</a></li>
            <li><a href="#" className="hover:text-yellow-500">How It Works</a></li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Policy</h3>
          <ul>
            <li><a href="#" className="hover:text-yellow-500">FAQ</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Shipping</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
          <p>+62 896 7311 2766</p>
          <p>food@example.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-200 pt-5 font-semibold ">
        <p className="text-sm text-black text-center">© 2022 Let’sFood. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;

