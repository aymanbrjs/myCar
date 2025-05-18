import React, { useState } from "react";
import logo from '../../assets/logo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg- shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-28"/>
            <div className="flex-shrink-0 text-xl font-bold text-blue-600">
              MyCar
            </div>
          </div>


          {/* Links - desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">شراء</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">تأجير</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">من نحن</a>
          </div>

          {/* Hamburger - mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
          }`}
      >
        <div className="px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">الرئيسية</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">شراء</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">تأجير</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">من نحن</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
