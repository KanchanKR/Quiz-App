import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/QuizGrad.svg"; // Adjust path if needed

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white to-purple-300 shadow-lg px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Hamburger Menu (Before Logo) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none mr-4"
          >
            <svg
              className="h-6 w-6"
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
              />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Logo (Hidden on Mobile) */}
        <div className="hidden md:flex">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-xl font-medium">
          <Link
            to="/history"
            className={`transition-colors duration-200 ${
              location.pathname === "/history"
                ? "text-[#4E22FC] border-b-2 border-[#4E22FC]"
                : "text-gray-700 hover:text-[#4E22FC]"
            }`}
          >
            Quiz History
          </Link>
          <Link
            to="/contact"
            className={`transition-colors duration-200 ${
              location.pathname === "/contact"
                ? "text-[#4E22FC] border-b-2 border-[#4E22FC]"
                : "text-gray-700 hover:text-[#4E22FC]"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Start Quiz Button */}
        <Link
          to="/quiz"
          className="bg-[#4E22FC] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#3B1AD9] transition-all duration-200 font-semibold"
        >
          Start Quiz
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4 rounded-lg px-6 py-4 flex flex-col gap-4 text-lg font-medium">
          <Link
            to="/history"
            onClick={toggleMenu}
            className={`transition-colors duration-200 ${
              location.pathname === "/history"
                ? "text-[#4E22FC] border-l-4 border-[#4E22FC] pl-2"
                : "text-gray-700 hover:text-[#4E22FC]"
            }`}
          >
            Quiz History
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className={`transition-colors duration-200 ${
              location.pathname === "/contact"
                ? "text-[#4E22FC] border-l-4 border-[#4E22FC] pl-2"
                : "text-gray-700 hover:text-[#4E22FC]"
            }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;