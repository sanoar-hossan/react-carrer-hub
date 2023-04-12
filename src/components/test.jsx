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