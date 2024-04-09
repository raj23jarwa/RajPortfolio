import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'portfolio' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'contact' },
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black sticky px-4 top-0'>
            <div>
                <h1 className='font-signature text-4xl'>Rajkumar</h1>
            </div>
            
                <ul className='hidden md:flex'>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-4 md:text-xl cursor-pointer font-medium text-gray-500 capitalize hover:scale-105 duration-200'
                        >
                           <Link to={link} smooth duration={500}> {link}</Link> 
                        </li>
                    ))}
                </ul>
                <div  onClick={() => setNav(!nav)}
                     className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav &&(
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
              bg-gradient-to-b from-black to-gray-800'>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-4 py-6 cursor-pointer font-medium  capitalize hover:scale-105 duration-200'
                        >
                           <Link to={link} onClick={()=>setNav(!nav)} smooth duration={500}>{link}</Link> 
                        </li>
                    ))}
                </ul>
                )}
                
            
        </div>
    );
};

export default Navbar;
