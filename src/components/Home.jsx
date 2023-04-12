import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from './Category';
import Featured from './Featured';

const Home = () => {

const categorydata=useLoaderData();

const [jobs,setjobs]=useState([]);
const [showAllJobs, setShowAllJobs] = useState(false);


useEffect(()=>{
  fetch('jobsinfo.json')
  .then(res=>res.json())
  .then(data=>setjobs(data))
},[])

 // Function to handle "See All Jobs" button click
 const handleSeeAllJobsClick = () => {
  setShowAllJobs(true);
}

    return (
      <div >
<div className=" my-container flex flex-col items-center justify-between lg:flex-row mb-24">

<div className="text-area leading-5">
<h2 className=' text-gray-900 sm:text-4xl sm:leading-none  '>
    One Step <br></br> Closer To Your <br />
      <span className=' text-blue-400 mb-5 '>Dream Job</span>
    </h2>
    <p className='text-base text-gray-700 md:text-lg pb-4'>
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


<div className='mt-40 pt-20 lg:pt-0'><h1 className='text-center text-3xl mt-40   text-black font-bold'>Job Category List</h1>
            <p className='text-center text-xl mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p></div>
<div className='mt-20 my-container shadow-xl  grid grid-cols-4'>{categorydata.map((catdata) => (
    <Category key={catdata.id} catdata={catdata} />
  ))}</div>

<div className='mt-20 my-container shadow-xl grid grid-cols-2'>
        {jobs.slice(0, 4).map((jobdata) => (
          <Featured key={jobdata.id} jobdata={jobdata} />
        ))}
      </div>

      {/* Show the next two cards when "See All Jobs" button is clicked */}
      {showAllJobs && (
        <div className='mt-20 my-container shadow-xl grid grid-cols-2'>
          {jobs.slice(4, 6).map((jobdata) => (
            <Featured key={jobdata.id} jobdata={jobdata} />
          ))}
        </div>
      )}

      {/* Show the "See All Jobs" button if there are more than four jobs */}
      {jobs.length > 4 && !showAllJobs && (
        <div className='text-center py-5 snap-center mx-auto'>
          <button
            className='p-5 font-bold transition duration-150 ease-out text-white hover:bg-indigo-300 bg-indigo-500'
            onClick={handleSeeAllJobsClick}
          >
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;