// import React, { useEffect, useState } from 'react';
// import { getDB } from './utilities/fakeDB';
// import { useLoaderData } from 'react-router-dom';
// import { LocationMarkerIcon } from '@heroicons/react/solid';
// import { CurrencyDollarIcon } from '@heroicons/react/solid';
// const Appliedjobs = () => {
// // const jobsdata=useLoaderData();
// // let jobdata=[]
// // const savedjobdata=getDB()


// // for(const id in savedjobdata){
// //     const foundjobdata=jobsdata.find(jobinfo=>jobinfo.id ==id)
// //     if(foundjobdata){
// //     jobdata.push(foundjobdata)
// //     }
   
// // }
// // console.log(jobdata)
// const [jobs,setjobs]=useState([])
// const [filtered, setFiltered] = useState([]);

// useEffect(()=>{
//     const alldata=localStorage.getItem('jobs-cart')
//      setjobs(JSON.parse(alldata));
// },[])

// const handleFilter = (type) => {
//     const filteredJobs = jobs.filter(job => job.remote_or_onsite === type);
//     setFiltered(filteredJobs);
//   }
//     return (
//         <div>
//             <div className='flex ml-5 py-6'>
//         <div className='btn mr-7'>
//           <button onClick={() => handleFilter('remote')}>Remote</button>
//         </div>
//         <div className='btn'>
//           <button onClick={() => handleFilter('onsite')}>Onsite</button>
//         </div>
//                     </div>
//             {jobs.map(job => (
//                 <div key={job.id}>
                    
//                     <div className='flex my-10 my-container   justify-center border border-solid border-gray-400 text-gray-900'>
//                         <div className='p-5 mr-5 bg-indigo-100' ><img className='object-cover w-25  lg:h-40'  src={job.company_logo} alt="" /></div>
//                      <div>   
//                     <h2 className='py-2'>{job.job_title}</h2>
//                     <p>{job.company_name}</p>
//                     <div className=" flex py-5 "><button className='btn mr-4'>{job.remote_or_onsite}</button><button className='btn pl-5'>{job.fulltime_or_parttime}</button></div>
//                     <div className='flex py-4'><LocationMarkerIcon className="w-6 h-6 text-gray-500" /> {job.address} <div className='flex'><CurrencyDollarIcon className="w-6 h-6 text-green-500" /> {job.salary}</div></div>
//                     <div><button className='btn'>View Details</button></div></div>

//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
    
// }; 

// export default Appliedjobs;



// import React from 'react';
// import { LocationMarkerIcon } from '@heroicons/react/solid';
// import { CurrencyDollarIcon } from '@heroicons/react/solid';
// import { Link } from 'react-router-dom';

// const Featured = ({jobdata}) => {
//     return (
        
//             <div>
//     <div className="card-body border-solid border-2 border-indigo-300 bg-indigo-100 ml-3 p-3 mb-5"> 
//    <div className='object-cover w-full  lg:h-full'> <img
// src={jobdata.company_logo}
// alt='book cover'
// className='h-20 w-40'
// /></div>
// <h1 className='badge py-4'>{jobdata.job_title}</h1>
// <p className='badge py-4'>{jobdata.company_name}</p>
// <div className="btn-grp flex">
//     <button className='btn'>{jobdata.remote_or_onsite}</button>
//     <button className='btn ml-2'>{jobdata.fulltime_or_parttime}</button>
// </div>
// <div className="details flex mt-4">
//     <div> <LocationMarkerIcon className="w-6 h-6 text-gray-500" /></div>
//     <div>{jobdata.location}</div>
//     <div className='flex ml-2'>
//     <div><CurrencyDollarIcon className="w-6 h-6 text-green-500" /></div> 
//     <div>Sallery:{jobdata.salary}</div>
//     </div>
    
// </div>
// <button className='btn mt-10 snap-center'>
//     <Link to={`/jobdetails/${jobdata.id}`}> View Details </Link>
// </button>




//     </div>

   
//         </div>
//     );
// };

// export default Featured;


// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import Category from './Category';
// import Featured from './Featured';

// const Home = () => {

// const categorydata=useLoaderData();

// const [jobs,setjobs]=useState([]);
// const [showAllJobs, setShowAllJobs] = useState(false);
// const handleSeeAllJobsClick = () => {
//   setShowAllJobs(true);
// };
// useEffect(()=>{
//   fetch('jobsinfo.json')
//   .then(res=>res.json())
//   .then(data=>setjobs(data))
// },[])



//     return (
//       <div >
// <div className=" my-container flex flex-col items-center justify-between lg:flex-row mb-24">

// <div className="text-area leading-5">
// <h2 className=' text-gray-900 sm:text-4xl sm:leading-none  '>
//     One Step <br></br> Closer To Your <br />
//       <span className=' text-blue-400 mb-5 '>Dream Job</span>
//     </h2>
//     <p className='text-base text-gray-700 md:text-lg pb-4'>
//     Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
//     </p>
//     <Link to='/jobs' className='btn md:w-auto md:mr-4'>
//       <div className='inline-flex items-center justify-center w-full h-full'>
//         <p className='mr-3'>Get Started</p>
       
//       </div>
//     </Link>
// </div>
// <div className="img-area">
// <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-70'>
//    <img src="bg.png" className='h-200 w-250' alt="" />
//   </div>
// </div>

// </div>


// <div className='mt-40 pt-20 lg:pt-0'><h1 className='text-center text-3xl mt-40   text-black font-bold'>Job Category List</h1>
//             <p className='text-center text-xl mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p></div>
// <div className='mt-20 my-container shadow-xl  grid grid-cols-4'>{categorydata.map((catdata) => (
//     <Category key={catdata.id} catdata={catdata} />
//   ))}</div>


// <div className='mt-20'><h1 className='text-center text-3xl mt-20  text-black font-bold'>Featured Jobs</h1>
//             <p className='text-center text-xl mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p></div>
// <div className='mt-20 my-container shadow-xl  grid grid-cols-2'>{jobs.map((jobdata) => (
//     <Featured key={jobdata.id} jobdata={jobdata} />
//   ))}
  
  
//   </div>

//     <div className=' text-center py-5  snap-center mx-auto'><button className='p-5 font-bold transition duration-150 ease-out text-white hover:bg-indigo-300 bg-indigo-500 '>See All Jobs</button></div>

//       </div>
      

      
    
//     );
// };

// export default Home;