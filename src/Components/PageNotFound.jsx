import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
 

  return (
    <div className='flex justify-center flex-col items-center bg-white text-center text-white h-[100%]'>
      <h1 className='text-gradient text-[18rem] m-0' >404</h1>
      <h2 className='text-gradient text-3xl'>Page Not Found</h2>
      <p className='text-gradient text-3xl'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/videos"
      className='text-gradient text-3xl'
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;