import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from './Category';

const Home = () => {

const categorydata=useLoaderData();



    return (
      <div>
<div className="bg-content my-container flex flex-col items-center justify-between lg:flex-row">

<div className="text-area">
<h2 className=' text-gray-900 sm:text-4xl sm:leading-none'>
    One Step <br></br> Closer To Your <br />
      <span className=' text-blue-400'>Dream Job</span>
    </h2>
    <p className='text-base text-gray-700 md:text-lg'>
    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
    </p>
    <Link to='/jobs' className='btn md:w-auto md:mr-4'>
      <div className='inline-flex items-center justify-center w-full h-full'>
        <p className='mr-3'>Get Started</p>
       
      </div>
    </Link>
</div>
<div className="img-area">
<div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-70'>
   <img src="bg.png" className='h-200 w-250' alt="" />
  </div>
</div>

</div>

<div><h1>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p></div>

<div>{categorydata.map((catdata) => (
    <Category key={catdata.id} catdata={catdata} />
  ))}</div>



      </div>

      
    
    );
};

export default Home;