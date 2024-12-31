import React, { useState } from 'react';
import { Menu as MenuIcon, Close as CloseIcon, Person as PersonIcon, Help as HelpIcon } from '@material-ui/icons';
import PublicIcon from '@material-ui/icons/Public'; // Circle like world icon

function TeslaNavbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
      {/* Tesla Logo */}
      <a href="#">
        <img src="img/teslalog.png" alt="Tesla Logo" className="h-16" />
      </a>

      {/* Center Menu */}
      <div className="hidden md:flex flex-1 justify-center space-x-6 group">
        <a href="#" className="font-semibold text-lg text-gray-100 hover:text-black transition">Vehicles</a>
        <a href="#" className="font-semibold text-lg text-gray-100 hover:text-black transition">Energy</a>
        <a href="#" className="font-semibold text-lg text-gray-100 hover:text-black transition">Charging</a>
        <a href="#" className="font-semibold text-lg text-gray-100 hover:text-black transition">Discover</a>
        <a href="#" className="font-semibold text-lg text-gray-100 hover:text-black transition">Shop</a>
      </div>
      {/* Right Menu */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white">
          <HelpIcon />
        </a>
        <a href="#" className="text-white">
          <PublicIcon />
        </a>
        <a href="#" className="text-white">
          <PersonIcon />
        </a>
      </div>
      {/* Burger Menu Icon for Mobile (only visible on mobile screens) */}
      <div className='sm:hidden'>
        <MenuIcon
          className="cursor-pointer text-white"
          onClick={() => setBurgerStatus(true)}
        />
      </div>

      {/* BurgerNav */}
      <div
        className={`fixed top-0 right-0 w-2/3 sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-500 ${burgerStatus ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end p-4">
          <CloseIcon
            className="cursor-pointer text-gray-800"
            onClick={() => setBurgerStatus(false)}
          />
        </div>

        <ul className="list-none text-left flex flex-col space-y-4 p-6 text-lg text-gray-800">
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">Vehicles</a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">Energy</a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">Charging</a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">Discover</a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">Shop</a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">We Robot</a>
          </li>

          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">
              <PublicIcon className="text-black" /> Language
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">
              <HelpIcon className="text-black" /> Help
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold border-b border-gray-300 pb-2 block hover:text-black transition">
              <PersonIcon className="text-black" /> Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeslaNavbar;
