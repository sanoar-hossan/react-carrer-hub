import React from 'react';

const Category = ({catdata}) => {
    return (
       <div>
<div className="card w-96 bg-base-100 shadow-xl  grid grid-cols-4">
    <div className="card-body"> 
   <div className='object-cover w-full  lg:h-full'> <img
src={catdata.logo}
alt='book cover'
className='h-10 w-10'
/></div>
<p className='badge'>{catdata.name}</p>
<div><small>{catdata.numJobsAvailable}jobs Available</small></div>
    </div>
</div>


<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>




       </div>
    );
};

export default Category;