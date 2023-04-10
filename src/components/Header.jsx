import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
           <div className='relative flex items-center justify-between'>
           
            {/* Logo Section */}
        <Link to='/' className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
          Jobs Hunt
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/statistics'
              
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/jobs'
              
            >
              Appplied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div><button className='btn'>Start Applying</button></div>
        </div>
        </div>
    );
};

export default Header;