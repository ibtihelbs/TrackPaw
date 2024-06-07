const Footer = () => {
  return (
    <footer className="px-8 text-black bg-yellow grid grid-cols-3 items-center  py-12">
      <img
        src="https://trackpaws.com/_next/image?url=%2Ftrackpaws.png&w=256&q=75"
        alt="pawtrack"
      />
      <div className="container mx-auto px-6  ">
        <h2 className="text-2xl font-bold">
          Keep Your Pets Safe with Track Paws
        </h2>
        <p className="mt-4">
          We are dedicated to providing the best technology to keep your pets
          safe and healthy. Join our community and ensure your pet's safety
          today.
        </p>
        <button className="mt-6 bg-blue-500  py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
      <ul>
        <li>
          <a href="#" className=" hover:text-gray-400">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-gray-400">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-gray-400">
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
