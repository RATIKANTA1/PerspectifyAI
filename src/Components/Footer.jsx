import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">PerSpectify_Ai</h2>
            <p className="text-sm">
              Empowering you with insights and tools for financial success.
            </p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl "
              >
                <FaFacebookSquare  />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl"
              >
                <FaSquareTwitter/>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl "
              >
               <FaLinkedin />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="grid grid-rows-3  lg:grid-rows-2 grid-flow-col ">
              <li className="mb-1 hover:text-blue-400">
                <a href="#home">Home</a>
              </li>
              <li className="mb-1 hover:text-blue-400">
                <a href="#about">About Us</a>
              </li>
              <li className="mb-1 hover:text-blue-400">
                <a href="#service">Services</a>
              </li>
              <li className="mb-1 hover:text-blue-400">
                <a href="#contact">Contact</a>
              </li>
              <li className="mb-1 hover:text-blue-400">
                <a href="https://0bf7f743-f186-469e-b03f-6846ec59233e.usrfiles.com/ugd/0bf7f7_5ba29c5c54654c05b4c6695c3878cd65.pdf">Privacy</a>
              </li>
              <li className="mb-1 hover:text-blue-400">
                <a href="https://0bf7f743-f186-469e-b03f-6846ec59233e.usrfiles.com/ugd/0bf7f7_819b0aefa88e4c33bd4b50cee3f4b6ed.pdf">Terms & condition</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2024 PerSpectify_Ai. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer;
