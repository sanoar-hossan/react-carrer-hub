
import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
const data = [
    { assignment: 'A1', data1: 57 },
    { assignment: 'A2', data1: 54 },
    { assignment: 'A3', data1: 60 },
    { assignment: 'A4', data1: 55 },
    { assignment: 'A5', data1: 35 },
    { assignment: 'A6', data1: 60 },
    { assignment: 'A7', data1: 57 },
    { assignment: 'A8', data1: 58 },
  ];
const Statistics = () => {
    return (
       <div className='mt-10 ml-10'>
         <AreaChart width={400} height={400} data={data}>
      <XAxis dataKey="assignment" /> {/* x-axis labels */}
      <YAxis /> {/* y-axis numbers */}
      <CartesianGrid />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="data1"
        fill="#8884d8" // Area fill color
        stroke="#8884d8" // Line color
        strokeWidth={2} // Line width
      />
    </AreaChart>
       </div>
    );
};

export default Statistics;