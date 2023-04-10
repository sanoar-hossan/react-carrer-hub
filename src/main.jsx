import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Appliedjobs from './components/Appliedjobs'
import Statistics from './components/Statistics'

const router=createBrowserRouter([{
path:'/',
element:<App></App>,
children: [
  {
path:'/',
element: <Home></Home>,
  },
  {
path:'blog',
element: <Blog></Blog>,
  },

  {
path:'jobs',
element: <Appliedjobs></Appliedjobs>,
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
