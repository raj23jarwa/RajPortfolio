import React from 'react'
import { FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
    const links =[
       {
        id:1,
        child:(
            <>
            Linkedin <FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/rajkumar-singh-abaa5016b/',
        style:'rounded-tr-sm'
       },
      
       {
        id:2,
        child:(
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/raj23jarwa',
        style:'rounded-tr-sm'
       },
       {
        id:3,
        child:(
            <>
            Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:raj23jarwa@gmail.com',
        style:'rounded-tr-sm'
       },

       {
        id:4,
        child:(
            <>
            Twitter <FaTwitter size={30}/>
            </>
        ),
        href:'https://twitter.com/raj_singh_23',
        style:'rounded-tr-sm'
       },
       {
        id:5,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'https://drive.google.com/file/d/1axI5Bdth2vR6Ptlb8sPDF_e0yhgQLlVG/view',
        style:'rounded-tr-sm',
        // download:true
       },
       
    ];

  return (
  
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
    <ul>
        {links.map(({ id, child, href, style }) => (
            <li
                key={id}
                className={"flex justify-between items-center w-40 h-14 bg-gray-500 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-100" + style}>
                <a href={href}
                    className={"flex justify-between items-center w-full text-white"}
                    target="_blank"
                    rel="noreferrer">
                    
                    {child}
                </a>
            </li>
        ))}
    </ul>
</div>
)
}
export default SocialLinks