import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFold4Line } from "react-icons/ri";
import { GiCoffeeBeans } from "react-icons/gi";

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Sign Up', path: '/signup' },
];

const productSubItems = [
  { label: 'Service One', path: '/service-one' },
  { label: 'Service Two', path: '/service-two' },
  { label: 'Service Three', path: '/service-three' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative  top-0 left-0 right-0 p-4 pb-8 z-50">
      <div className="container mx-auto px-4 bg-inherit">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <RiMenuFold4Line
              onClick={toggleMenu}
              className="text-orange-800 w-6 h-6 cursor-pointer"
            />
            <div className="text-3xl font-bold text-orange-800">
              <GiCoffeeBeans />
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            {menuItems.slice(0, 4).map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={item.label === 'Products' ? toggleDropdown : null}
                onMouseLeave={item.label === 'Products' ? toggleDropdown : null}
              >
                <Link
                  to={item.path}
                  className="text-orange-600 hover:text-white"
                >
                  {item.label}
                </Link>
                {item.label === 'Products' && isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-slate-700 shadow-lg rounded">
                    {productSubItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 text-white hover:bg-gray-500"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/cart"
              className="text-orange-600 hover:text-white"
            >
              Cart
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onClick={item.label === 'Products' ? toggleDropdown : null}
              >
                <Link
                  to={item.path}
                  className="block py-2 text-sm text-gray-600 hover:bg-gray-200"
                >
                  {item.label}
                </Link>
                {item.label === 'Products' && isDropdownOpen && (
                  <div className="ml-4 mt-2 w-48 bg-slate-700 shadow-lg rounded">
                    {productSubItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 text-white hover:bg-gray-500"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/cart"
              className="block py-2 text-sm text-gray-600 hover:bg-gray-200"
            >
              Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
