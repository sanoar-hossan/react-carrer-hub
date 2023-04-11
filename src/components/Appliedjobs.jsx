import React from 'react';
import { getDB } from './utilities/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Appliedjobs = () => {
const jobsdata=useLoaderData();
let jobdata=[]
const savedjobdata=getDB()


for(const id in savedjobdata){
    const foundjobdata=jobsdata.find(jobinfo=>jobinfo.id ==id)
    if(foundjobdata){
    jobdata.push(foundjobdata)
    }
}
    return (
        <div>
            {jobdata.map(job => (
                <div key={job.id}>
                    <h2>{job.company_name}</h2>
                    <button>{job.fulltime_or_parttime}</button>
                </div>
            ))}
        </div>
    );
};

export default Appliedjobs;