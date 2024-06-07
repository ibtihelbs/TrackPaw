const Header = () => {
  return (
    <header className="bg-body shadow">
      <div className=" px-6 py-3 flex justify-between items-center">
        <a href="/" className="text-lg font-semibold  text-gray-800">
          <img
            src="https://trackpaws.com/_next/image?url=%2Ftrackpaws.png&w=256&q=75"
            alt="pawtrack"
            className="h-[30px]"
          />
        </a>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-800">
            Home
          </a>
          <a href="#features" className="text-gray-800">
            Features
          </a>
          <a href="#pricing" className="text-gray-800">
            Pricing
          </a>
          <a href="#faq" className="text-gray-800">
            FAQ
          </a>
          <a href="#contact" className="text-gray-800">
            Contact Us
          </a>
          <a href="#get-started" className=" font-semibold">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
