import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Featured = ({jobdata}) => {
    return (
        
            <div>
    <div className="card-body border-solid border-2 border-indigo-300 bg-indigo-100 ml-3 p-3 mb-5"> 
   <div className='object-cover w-full  lg:h-full'> <img
src={jobdata.company_logo}
alt='book cover'
className='h-20 w-40'
/></div>
<h1 className='badge py-4'>{jobdata.job_title}</h1>
<p className='badge py-4'>{jobdata.company_name}</p>
<div className="btn-grp flex">
    <button className='btn'>{jobdata.remote_or_onsite}</button>
    <button className='btn ml-2'>{jobdata.fulltime_or_parttime}</button>
</div>
<div className="details flex mt-4">
    <div> <LocationMarkerIcon className="w-6 h-6 text-gray-500" /></div>
    <div>{jobdata.location}</div>
    <div className='flex ml-2'>
    <div><CurrencyDollarIcon className="w-6 h-6 text-green-500" /></div> 
    <div>Sallery:{jobdata.salary}</div>
    </div>
    
</div>
<button className='btn mt-10 snap-center'><Link to={`/jobdetails/$(id)`}> View Details </Link></button>




    </div>

   
        </div>
    );
};

export default Featured;