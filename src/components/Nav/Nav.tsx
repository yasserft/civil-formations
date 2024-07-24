import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between bg-gradient-to-r from-yellow-500 to-orange-500 p-4 drop-shadow-lg fixed w-full">
        <div className='ml-8'>
            <h2 className='text-orange-100 text-3xl font-bold'>Formations Civil</h2>
        </div>
        <div>
        <ul className="mr-8 flex justify-center space-x-4 text-xl font-bold">
            <li><a href="#home" className="text-white hover:text-orange-200">Home</a></li>
            <li><a href="#about" className="text-white hover:text-orange-200">About</a></li>
            <li><a href="#contact" className="text-white hover:text-orange-200">Contact</a></li>
        </ul>
        </div>
    </nav>
  );
};

export default Nav;
