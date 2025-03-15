import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg fixed top-0 w-full z-10 text-white'>

      <div className='w-20'>
        <img
          src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'
          alt='Logo'
          className='w-full h-auto rounded-full shadow-md border-2 border-white'
        />
      </div>
      
   
      <div className='hidden md:flex space-x-6 items-center'>
        <select className='text-gray-800 p-2 rounded-md border-none outline-none cursor-pointer shadow-md'>
          <option>Exams</option>
          <option>SSC</option>
          <option>Railway</option>
          <option>Banking</option>
        </select>
        <button className='hover:text-yellow-300 transition-all'>SuperCoaching</button>
        <button className='hover:text-yellow-300 transition-all'>Test Series</button>
        <button className='hover:text-yellow-300 transition-all'>Skill Academy</button>
        <button className='hover:text-yellow-300 transition-all'>Pass</button>
        <button className='hover:text-yellow-300 transition-all'>More</button>
      </div>
      
  
      <div className='relative w-64 hidden md:block'>
        <input
          type='text'
          className='w-full border-none rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-lg text-gray-800 hover:bg-white'
          placeholder='Search...'
        />
        <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-blue-700' />
      </div>
      

      <Link to='/login' className='bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition-all shadow-lg'>
        Get Started
      </Link>
      

      <div className='md:hidden'>
        <FaBars className='text-white text-2xl cursor-pointer' />
      </div>
    </div>
  );
};

export default NavBar;