import React, { useEffect, useState } from 'react';

import { RiMenu3Line } from 'react-icons/ri';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import NavItem from './NavItem';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const screenSize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', screenSize);

    return () => {
      window.removeEventListener('resize', screenSize);
    };
  }, [windowWidth]);

  return (
    <nav className=' bg-gray-600  border-b-4 border-red-500 p-4'>
      <div className='container flex justify-between items-center py-4'>
        <h1 className='text-3xl text-white font-semibold'>
          <span className='text-red-500'>Acme </span>Web Design
        </h1>
        {mobileMenu ? (
          <ul
            className={`w-80 h-screen fixed top-0 right-0 bg-red-500 shadow-lg shadow-black p-7 pt-[120px] transform translate-x-0 `}>
            <NavItem mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          </ul>
        ) : (
          <ul className='md:flex gap-[25px] hidden'>
            <NavItem setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
          </ul>
        )}
        <div
          onClick={() => setMobileMenu((prev) => !prev)}
          className='md:hidden flex -mt-4'>
          {mobileMenu ? (
            <MdOutlineRestaurantMenu
              color='#fff'
              size={30}
              className='cursor-pointer  z-10'
            />
          ) : (
            <RiMenu3Line
              color='#fff'
              size={30}
              className='cursor-pointer  z-10'
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
