import React, { useState } from 'react';
import ADD from '@assets/images/ADD.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showItems, setShowItems] = useState(false);

  const toggle = () => setShowItems((prevState) => !prevState);

  return (
    <div>
      <div className=" bg-red-900 md:flex hidden flex-row justify-between items-center sticky top-0 3xl:max-w-7xl 3xl:mx-auto px-5 py-2">
        <img src={ADD} alt="autologo" className="w-20" />
        <div className="flex justify-content md:space-x-5 md:px-0 px-5">
          <Link to="/" className="font-bold font-serif text-white">
            Home
          </Link>
          <Link to="/brands" className=" font-bold  font-serif text-white">
            Brands
          </Link>
          <Link to="/about-us" className="font-bold font-serif text-white">
            About Us
          </Link>

          <Link to="/Services" className=" font-bold font-serif text-white">
            Service
          </Link>

          <Link to="/Contact" className="font-bold  font-serif text-white">
            Contact
          </Link>
        </div>
      </div>

      <nav className="md:hidden block p-3 border-gray-200 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <img src={ADD} alt="Autologo" className="w-20" />
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={toggle}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showItems && (
            <div
              className="items-end flex flex-col w-full"
              id="navbar-hamburger"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <ul className="bg-white p-2 flex flex-col rounded-lg bg-gray-200 absolute right-10 top-16">
                <li className="pb-0.5 border-b border-white">
                  <Link to="/" className="hover:text-blue-700">
                    Home
                  </Link>
                </li>
                <li className="pb-0.5 border-b border-white">
                  <Link to="/about-us" className="hover:text-blue-700">
                    About Us
                  </Link>
                </li>
                <li className="pb-0.5 border-b border-white">
                  <Link to="/brands" className="hover:text-blue-700">
                    Brands
                  </Link>
                </li>
                <li className="pb-0.5 border-b border-white">
                  <Link to="/Services" className="hover:text-blue-700">
                    Services
                  </Link>
                </li>
                <li className="pb-0.5 border-b border-white">
                  <Link to="/Careers" className="hover:text-blue-700">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="hover:text-blue-700">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
