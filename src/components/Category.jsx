import React from 'react';

const Category = ({catdata}) => {
    return (
       <div>
<div>
    <div className="card-body border-solid border-2 border-indigo-300 bg-indigo-100 ml-3 p-3"> 
   <div className='object-cover w-full  lg:h-full'> <img
src={catdata.logo}
alt='book cover'
className='h-10 w-10'
/></div>
<p className='badge py-4'>{catdata.name}</p>
<div><small>{catdata.numJobsAvailable} jobs Available</small></div>
    </div>
</div>





       </div>
    );
};

export default Category;