import React from 'react';
import heroPicture from './meAndWife.jpg';

function Hero() {
  return (
    <div className="container mx-auto flex-row items-center p-6 mt-5 bg-gray-400">
        <div className='flex flex-col mx-auto mb-5 space-y-5'>
            <h1 className='text-6xl font-bold text-center p-2'>Welcome</h1>
            <p className='text-2xl px-10 text-center'>This is my practice website to keep all of my projects</p>
        </div>
        <img className='mx-auto lg:h-lpicture' src={heroPicture} />
    </div>
  );
}

export default Hero;
