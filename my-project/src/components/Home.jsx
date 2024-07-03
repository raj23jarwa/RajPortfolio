import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/hero.png";
import { Link } from 'react-scroll';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ['Frontend Developer', 'UI/UX Enthusiast', 'Blockchain Enthusiast'],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 200,
  });

  return (
    <div name="home" className='h-screen w-full pt-28 md:pt-8 bg-gray-100 dark:bg-slate-900 transition-colors duration-300'>
      <div className='max-w-screen-lg mx-auto h-full flex flex-col items-center justify-center px-4 md:flex-row'>
        <div className='flex flex-col justify-center md:w-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-black dark:text-white md:pt-1'>
            I am a <span className='dark:text-red-500 text-cyan-500 font-bold'>{typeEffect}<Cursor /></span>
          </h2>
          <p className='text-gray-500 dark:text-gray-400 py-4 max-w-md font-semibold text-2xl leading-relaxed'>
            I have 3+ years of experience in building and designing software.
            Currently, I love to work on web technologies like React, Tailwind, Next.js, and other JavaScript frameworks and libraries.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r dark:from-red-500 dark:to-red-400 from-cyan-500 to-blue-500'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className='rounded-full mx-auto w-52 h-96 md:w-80 md:h-auto object-cover shadow-cyan-300 shadow-md'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
