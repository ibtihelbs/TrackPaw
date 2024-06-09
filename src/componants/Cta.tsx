import React, { FormEvent } from "react";

const Cta = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="flex items-center m-auto w-[450px] justify-center p-4 bg-white rounded-full">
      <form
        className="flex items-center space-x-4 w-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email@mail.com"
          aria-label="Email address"
          className="py-2 px-4 rounded-full  shadow-md"
          required
        />
        <button
          type="submit"
          className="text-xl shadow-md bg-accent text-white py-2 px-4 rounded-full hover:bg-orange-700 transition duration-300"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Cta;
