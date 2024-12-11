import { useState } from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll

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
          <li className="p-2 text-base transition-transform duration-100 ease-in-out hover:text-blue-400 hover:cursor-pointer border-b-2 border-gray-500 md:border-0">
            <Link to="home" smooth={true} duration={300} className="ml-4 md:ml-0">
              Home
            </Link>
          </li>
          <li className="p-2 text-base transition-transform duration-100 ease-in-out hover:text-blue-400 hover:cursor-pointer">
            <Link to="about" smooth={true} duration={100}>
              About Us
            </Link>
          </li>
          <li className="p-2 text-base transition-transform duration-100 ease-in-out hover:text-blue-400 hover:cursor-pointer">
            <Link to="services" smooth={true} duration={100}>
              Services
            </Link>
          </li>
          <li className="p-2 text-base transition-transform duration-100 ease-in-out hover:text-blue-400 hover:cursor-pointer">
            <Link to="book-appointment" smooth={true} duration={100}>
              Booking
            </Link>
          </li>
          <li className="p-2 text-base transition-transform duration-100 ease-in-out hover:text-blue-400 hover:cursor-pointer">
            <Link to="blog" smooth={true} duration={100}>
              Blog
            </Link>
          </li>
          <li className="p-2 text-base transition-transform duration-100 ease-in-out hover:text-blue-400 hover:cursor-pointer">
            <Link to="contact" smooth={true} duration={100}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
