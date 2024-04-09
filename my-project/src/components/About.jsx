import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className='w-full  bg-gradient-to-b from-gray-800 to-black text-white pt-32 md:pt-3'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
        <div className='pt-[5rem]'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500
             '>About</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <p className='text-xl mt-20 leading-relaxed'>
        Hi there! I'm a <span className='bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-md'>Rajkumar Singh</span>, a passionate Frontend Developer, graduated from BK Birla Institute of Engineering & Technology,Pilani (Rajasthan) dedicated
         to crafting immersive digital experiences that captivate and
          engage users.'m an enthusiastic problem solver with a keen eye for detail, constantly seeking innovative solutions to elevate user interactions. My journey in the realm of Frontend Development has equipped me with a versatile skill set encompassing HTML, CSS, and JavaScript frameworks such as <br/> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-md'>React and Vue.js </span> . Continuously learning and adapting to emerging technologies,
           I embrace challenges head-on to stay at the forefront of industry trends.
        </p>
        <br/>
        <p className='text-xl leading-relaxed'>
        What sets me apart is my unwavering commitment to user experience. Beyond writing clean, efficient code, I prioritize usability and accessibility, ensuring that every interaction is intuitive and inclusive. By conducting thorough testing and soliciting feedback, I continuously refine and optimize frontend solutions to deliver unparalleled user satisfaction.
        </p>
        </div>

        </div>
    </div>
    
  )
}

export default About