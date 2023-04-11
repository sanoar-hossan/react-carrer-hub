import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { CurrencyDollarIcon } from '@heroicons/react/solid';

const Jobdetails = () => {
    const [jobDetails, setJobDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      const res = await fetch('/jobsinfo.json');
      const data = await res.json();
      const singledata = data.find(job => job.id === id);
      setJobDetails(singledata);
    };
    fetchJobDetails();
  }, [id]);

  const handleApplyNowClick = () => {
    // Save jobDetails to local storage
    localStorage.setItem('jobDetails', JSON.stringify(jobDetails));
    // Display a success message or perform other actions
    alert('Job details saved to local storage');
  };

  if (!jobDetails) {
    return <div>Loading...</div>; // Add a loading state while data is being fetched
  }

  return (
    <div>
      <div className="bg-content bg-indigo-300 text-center my-container flex flex-col items-center   mb-24">
        <h1 className='text-center font-bold text-3xl'>Job Details</h1>
        </div>

        <div className='flex my-container'>
      <div className="left m-4">
      <p className='mb-4'><span className='font-bold '>Job Description:</span> {jobDetails.job_description}</p>
      <p className='mb-4'><span className='font-bold '>Job Description:</span> {jobDetails.job_responsibility}</p>
      <p className='mb-4'><span className='font-bold '>Educational Requirements:</span> {jobDetails.educational_requirements}</p>
      <p className='mb-4'><span className='font-bold  '>Experiences:</span> {jobDetails.experiences}</p>
      </div>
<div className="right">
<div className="job-card bg-indigo-300 p-6">
        <div><h1 className='text-center'>Job Details</h1></div>
        <div><hr></hr></div>
        <div className="job-card-salary flex p-3"> <CurrencyDollarIcon className="w-6 h-6 text-indigo-800" /> Salary: {jobDetails.salary}</div>
        <div className="job-card-title p-3" > Job Title:{jobDetails.job_title}</div>
        <div><h1 className='text-center p-3'>Contact Information</h1></div>
        <div><hr></hr></div>
        <div className="job-card-contact p-3">
          <div>Phone: {jobDetails.contact_information.phone}</div>
          <div>Email: {jobDetails.contact_information.email}</div>
        </div>
        <div className="job-card-title p-3 flex"><LocationMarkerIcon className="w-6 h-6 text-indigo-800" /> Address:{jobDetails.address}</div>
      </div>
      <button className='bg-indigo-500 p-5 font-bold text-white w-full text-center mt-5 bg onClick={()=>handleApplyNowClick(id)}'>Apply Now</button>
     
</div>

       </div>



    </div>
  );
};

export default Jobdetails;

