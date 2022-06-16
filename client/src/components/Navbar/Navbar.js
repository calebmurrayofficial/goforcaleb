import React from 'react';
import logo from './favicon.ico'

function Navbar() {
  return (
    <nav className="relative container mt-4 md:mx-auto">
        <div className='flex items-center justify-between'>
            <a href='/'><img src={logo} /></a>
            <div className='flex space-x-6'>
                <a href='/'>projects</a>
                <a href='#about'>about</a>
                <a href='/'>contact</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
