import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;