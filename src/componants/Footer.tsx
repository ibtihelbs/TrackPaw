import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">
          Keep Your Pets Safe with Track Paws
        </h2>
        <p className="mt-4">
          We are dedicated to providing the best technology to keep your pets
          safe and healthy. Join our community and ensure your pet's safety
          today.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
