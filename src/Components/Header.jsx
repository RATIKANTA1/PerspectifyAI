 import { useState,React } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 p-4 text-white">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl">PerSpectify_Ai</h1>
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex space-x-4 absolute md:relative bg-gray-600 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 md:left-0 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="p-2 text-base transition-transform 
        duration-300 ease-in-out  hover:text-blue-400 border-b-2 border-gray-500 md:border-0  ">
    <a href="#home" className="ml-4 md:ml-0">Home</a>
  </li>
  <li className="p-2 text-base transition-transform
   duration-300 ease-in-out  hover:text-blue-400  ">
    <a href="#about">About Us</a>
  </li>
  <li className="p-2 text-base transition-transform
   duration-300 ease-in-out  hover:text-blue-400 ">
    <a href="#services">Services</a>
  </li>
  <li className="p-2 text-base transition-transform
   duration-300 ease-in-out  hover:text-blue-400 ">
    <a href="#booking">Booking</a>
  </li>
  <li className="p-2 text-base transition-transform 
  duration-300 ease-in-out  hover:text-blue-400">
    <a href="#blog">Blog</a>
  </li>
  <li className="p-2 text-base transition-transform
   duration-300 ease-in-out  hover:text-blue-400 ">
    <a href="#contact">Contact</a>
  </li>
      </ul>
    </nav>
  </header>
  
  );
  }
  
  export default Header;
  