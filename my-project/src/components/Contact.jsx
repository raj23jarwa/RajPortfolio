import React from 'react'

const Contact = () => {

  return (
    <div name='contact' className='w-full dark:text-white dark:bg-slate-900 text-gray-600 bg-gray-100 font-semibold pt-20 md:pt-28 '>
        <div className='flex flex-col  p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'> Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/lakmnxza' method='POST' className='flex flex-col gap-4 w-full md:w-1/2'>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className='p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-600 focus:outline-none' 
                    required
                    />

                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className='p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-600 focus:outline-none'
                    required 
                    />
                    <textarea 
                    name="message" 
                    rows="10"
                    placeholder='Enter your message'
                    className='p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-600 focus:outline-none'
                    required>

                    </textarea>
                    <button className='text-white bg-gradient-to-r dark:from-red-500 dark:to-red-400 from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact