import { NavLink } from 'react-router-dom';

const NavItem = ({ setMobileMenu, mobileMenu }) => {
  return (
    <>
      <li
        onClick={() => setMobileMenu(false)}
        className={
          mobileMenu
            ? 'py-2 text-center text-lg font-semibold  hover:border-white hover:border-b-2 hover:text-gray-900 transition-all w-[60px] mx-auto duration-150 ease-in-out'
            : ''
        }>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive && !mobileMenu
              ? 'text-red-500 font-bold hover:text-gray-400'
              : 'text-white font-bold hover:text-gray-400'
          }>
          Home
        </NavLink>
      </li>
      <li
        onClick={() => setMobileMenu(false)}
        className={
          mobileMenu
            ? 'py-2 text-center w-[60px] mx-auto text-lg font-semibold hover:border-white hover:border-b-2 hover:text-gray-900 transition-all duration-150 ease-in-out'
            : ''
        }>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive && !mobileMenu
              ? 'text-red-500 font-bold hover:text-gray-400 '
              : 'text-white font-bold hover:text-gray-400'
          }>
          About
        </NavLink>
      </li>
      <li
        onClick={() => setMobileMenu(false)}
        className={
          mobileMenu
            ? 'py-2 text-center w-[60px] mx-auto text-lg font-semibold hover:border-white hover:border-b-2  hover:text-gray-900 transition-all duration-150 ease-in-out'
            : ''
        }>
        <NavLink
          to='/services'
          className={({ isActive }) =>
            isActive && !mobileMenu
              ? 'text-red-500 font-bold hover:text-gray-400'
              : 'text-white font-bold hover:text-gray-400'
          }>
          Services
        </NavLink>
      </li>
    </>
  );
};

export default NavItem;
