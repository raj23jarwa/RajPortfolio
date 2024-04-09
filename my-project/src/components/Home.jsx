import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/hero.png"
import {Link} from 'react-scroll'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Home = () => {
  const [typeEffect] =useTypewriter({
    words:['Frontend developer','UI/UX Enthusiast','Blockchain Enthusiast'],
    loop:{},
    typeSpeed:200,
    deleteSpeed:200,
  })
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto h-full flex flex-col items-center 
        justify-center px-4 md:flex-row' >

            <div className='flex flex-col justify-center md:w-full '>
               <h2 className='text-4xl sm:text-7xl font-bold text-white pt-36 md:pt-1'>I am a <span className='text-cyan-500 font-bold'>{typeEffect}</span></h2>
               <p className='text-gray-500 py-4 max-w-md font-semibold text-2xl leading-relaxed'>I have 2+ years of experience in building and designing softwares.
                currently, i love to work on web technologies like React,Tailwind, Nextjs and other javascript frameworks and libraries.
               </p>
               <div>
               <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'> Portfolio
               <span className='group-hover:rotate-90 duration-300' > < MdKeyboardArrowRight size={25} className='ml-1'/> </span>

               </Link>

               </div>
            </div>
            <div>
            <img src={HeroImage} alt="myprofile" className='rounded-2xl mx-auto w-48 md:w-80 md:h-auto object-cover' />
        </div>
        </div>
       
    </div>

  )
}

export default Home