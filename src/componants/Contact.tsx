import React, { useState, ChangeEvent, FormEvent } from "react";
import H1 from "./H1";
import H2 from "./H2";
const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Message:", message);
    setEmail("");
    setUsername("");
    setMessage("");
  };

  return (
    <div className="mt-8 grid gap-5 justify-center items-center ">
      <H1 content="Contact Us" center={true} />
      <div className="grid grid-cols-2 gap-5 w-[80vw] items-center p-6 ">
        <form
          className="rounded-lg overflow-hidden bg-white  shadow-lg p-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>

        <div className="grid grid-rows-3 content-between h-full p-6">
          <div className="grid gap-6">
            <H2 content="Reach out to us :" />
            <ul>
              <li className="text-xl font-bold">Phone: 02037508879</li>
              <li className="text-xl font-bold"> Email: info@trackpaws.com</li>
            </ul>
          </div>

          <div className="h-[100px] bg-[length:100px_100px] bg-[url(https://cdn.pixabay.com/photo/2016/04/22/14/32/paws-1345885_640.png)] "></div>

          <div className="grid gap-6">
            <H2 content="Visit Our Socials" />
            <ul className="flex gap-8">
              <li>
                <a href="https://www.facebook.com">
                  <img src="./social/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <img src="./social/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <img src="./social/instagram.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
