import{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import HeaderComponent from './HeaderComponent';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Fifth from './Fifth';
import ThreeAfter from './ThreeAfter';
import { useEffect, useRef } from 'react';

const Header = () => {
  const menuRef = useRef(null);
  const [navToggle, setNavToggle] = useState(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNavToggle(false);
    }
  };
  useEffect(() => {
    if (navToggle) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navToggle]);


  return (
    <div className='overflow-x-hidden'>
    <div className="flex bg-[#e4efff] justify-between h-36 w-full px-6 sm:px-6 md:px-12 lg:px-28 pt-4 relative items-center ">
      {/* Logo */}
      <div className="Logo">
        <NavLink to="/" className="text-[#6165f3] font-sans text-2xl sm:text-2xl font-extrabold">
          Investor App
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-evenly w-3/5 lg:w-2/5 text-lg text-center">
        <NavLink to="/" className="text-gray-800 font-bold">
          Home
        </NavLink>
        <NavLink to="/about" className="text-gray-400">
          About App
        </NavLink>
        <NavLink to="/faqs" className="text-gray-400">
          FAQs
        </NavLink>
        <NavLink to="/preview" className="text-gray-400">
          Preview
        </NavLink>
      </ul>

      {/* Download Button */}
      <button className="hidden md:block bg-white rounded h-10 w-28 px-4 py-2 text-[#6165F3] border-2 z-10">
        Download
      </button>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setNavToggle(!navToggle)}
      >
        <IoMenu />
      </button>

      {/* Toggle Menu for Mobile */}
      {navToggle && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 w-48 bg-white shadow-lg z-20 md:hidden"
        >
          <ul className="flex flex-col items-start p-4">
            <NavLink
              to="/"
              className="text-gray-800 block py-2 w-full"
              onClick={() => setNavToggle(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-400 block py-2 w-full"
              onClick={() => setNavToggle(false)}
            >
              About App
            </NavLink>
            <NavLink
              to="/faqs"
              className="text-gray-400 block py-2 w-full"
              onClick={() => setNavToggle(false)}
            >
              FAQs
            </NavLink>
            <NavLink
              to="/preview"
              className="text-gray-400 block py-2 w-full"
              onClick={() => setNavToggle(false)}
            >
              Preview
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  
    <HeaderComponent/>
    <Second/>
    <Third/>
    <Forth/>
    <ThreeAfter/>

    <Fifth/> 
</div>
  );
};

export default Header;
