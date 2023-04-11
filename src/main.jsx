import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Appliedjobs from './components/Appliedjobs'
import Statistics from './components/Statistics'
import ErrorPage from './Errorpage'
import Category from './components/Category'
import Jobdetails from './components/Jobdetails'

const router=createBrowserRouter([{
path:'/',
element:<App></App>,
errorElement:<ErrorPage></ErrorPage>,

children: [
  {
path:'/',
element: <Home></Home>,
loader:()=>fetch('/category.json')
  },
  
  {
    path: '/jobdetails/:id',
    element: <Jobdetails></Jobdetails>,
    loader: async ({ params }) => {
        const res = await fetch('/jobsinfo.json');
        const data = await res.json();
        const singledata = data.find(job => job.id === params.id); 
         return <Jobdetails jobDetails={singledata} />;;
}
  },
  {
path:'blog',
element: <Blog></Blog>,
  },

  {
path:'jobs',
element: <Appliedjobs></Appliedjobs>,
loader:()=>fetch('/jobsinfo.json'),
  },
  {
path:'statistics',
element: <Statistics></Statistics>,
  },
],

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
