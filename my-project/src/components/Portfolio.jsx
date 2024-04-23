import React from 'react';
import todo from '../assets/todo.png';
import DiceGame from '../assets/DiceGame.png'
import watchlist from '../assets/watchlist.png'
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: todo,
            demoLink: 'https://to-do-app-mu-three.vercel.app/',
            codeLink: 'https://github.com/raj23jarwa/ToDo-App'
        },
        {
            id: 2,
            src: DiceGame,
            demoLink: 'https://dice-game-using-react-tailwind.vercel.app/',
            codeLink: 'https://github.com/raj23jarwa/Dice-Game-Using-React--Tailwind'
        },
        {
            id: 3,
            src: watchlist,
            demoLink: 'https://movie-watchlistt.vercel.app/',
            codeLink: 'https://github.com/raj23jarwa/Authenticate_Assignment'
        },
        {
            id: 4,
            src: todo,
            demoLink: 'https://example.com/demo2',
            codeLink: 'https://example.com/code2'
        },
        {
            id: 5,
            src: todo,
            demoLink: 'https://example.com/demo2',
            codeLink: 'https://example.com/code2'
        },
        {
            id: 6,
            src: todo,
            demoLink: 'https://example.com/demo2',
            codeLink: 'https://example.com/code2'
        },
    
        
        // Add more portfolio items as needed
    ];

    return (
        <div name='portfolio' className='w-full text-white pt-14 '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pt-28 md:pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 '>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                    {portfolios.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img
                                src={src}
                                alt=""
                                className='rounded-md duration-200 hover:scale-105 w-[95%] h-56'
                            />
                            <div className='flex justify-center items-center'>
                                <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105   '>Demo</a>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105  '> Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
