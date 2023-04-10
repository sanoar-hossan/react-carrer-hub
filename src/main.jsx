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

const router=createBrowserRouter([{
path:'/',
element:<App></App>,
errorElement:<ErrorPage></ErrorPage>,

children: [
  {
path:'/',
element: <Home></Home>,
loader:()=>fetch('category.json')
  },
  
  {
path:'blog',
element: <Blog></Blog>,
  },

  {
path:'appliedjobs',
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
