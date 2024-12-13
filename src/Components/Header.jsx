import { useState } from "react";
import { Link } from "react-scroll";  
import img  from "../assets/ai.png"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 p-4 text-white top-0 sticky z-50 shadow-lg shadow-gray-700">
      <nav className="flex justify-between items-center">
        <a href="/" className="text-2xl md:text-lg lg:text-2xl flex justify-between items-center">PerSpectify_Ai <img src={img} alt="load" className="w-12 h-12 ml-2" /></a>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              // Close icon
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Menu icon
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
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex space-x-4 absolute md:relative bg-gray-700 md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 md:left-0 ${
            isMenuOpen ? "flex items-center justify-center" : "hidden md:flex md:items-start md:justify-start"
          }`}
        >
          {["home", "about", "services", "book-appointment", "blog", "contact"].map((section) => (
            <li
              key={section}
              className="p-2 text-base transition-transform duration-150 ease-in-out hover:text-blue-400 hover:cursor-pointer"
            >
              <Link
                to={section}
                smooth={true}
                duration={300}
                className="text-center"
                onClick={closeMenu}
              >
                {section.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
