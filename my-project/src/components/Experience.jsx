import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/tailwind-css.png';
import redux from '../assets/redux.png'
import nodejs from '../assets/nodejs.png';
// import graphql from '../assets/graphql.png';
import github from '../assets/github.png';
import jira from '../assets/jira.png';
import aws from '../assets/aws.svg';
import next from '../assets/next.png' 
const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACT JS',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: redux,
            title: 'REDUX',
            style: 'shadow-violet-700'
        },

        {
            id: 7,
            src: nodejs,
            title: 'NODE JS',
            style: 'shadow-lime-600'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MONGODB',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-400'
        },

        {
            id: 10,
            src: jira,
            title: 'JIRA',
            style: 'shadow-blue-500'
        },
        {
            id:11,
            src:aws,
            title:'AWS',
            style:'shadow-yellow-500'
        },
        {
            id:12,
            src:next,
            title:'NEXT',
            style:'shadow-gray-400'
        }
    ];

    return (
        <div name='experience' className='w-full dark:text-white dark:bg-slate-900 bg-gray-100 font-semibold text-gray-600 py-16 pt-28'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6 '>These are the technologies that I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3  gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-[20] mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
