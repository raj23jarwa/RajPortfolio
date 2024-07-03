import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleActive = (index) => {
    setActive(index); // Set active state to the clicked index
  };
  

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 sticky top-0 bg-gray-100 text-gray-800 dark:bg-slate-900 dark:text-white transition-colors duration-300`}>
      <div>
        <h1 className="font-signature text-4xl font-bold ">Rajkumar</h1>
      </div>

      <ul className="hidden md:flex gap-6">
        {links.map(({ id, link }, index) => (
          <li
            key={id}
            onClick={() => handleActive(index)}
            className={`px-4 md:text-xl cursor-pointer font-medium capitalize hover:scale-105 duration-200 hover:border-b-2 border-white rounded-xl ${active === index ? 'text-blue-500' : 'text-gray-500 dark:text-gray-300'}`}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <button onClick={handleDarkMode} className="mr-4">
          <CgDarkMode size={25} />
        </button>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark:bg-gradient-to-b from-black dark:to-gray-800 dark:text-white bg-gradient-to-b from bg-cyan-600 to-cyan-300 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer font-medium capitalize hover:scale-105 duration-200 hover:border-b-2 border-white rounded-xl"
            >
              <Link
                to={link}
                onClick={() => setNav(!nav)}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
