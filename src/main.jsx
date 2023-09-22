import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layouts/Home/Home';
import Routes from './router/Routes';
import ErrorPage from './layouts/ErrorPage/ErrorPage';
import AppliedJobs from './layouts/AppliedJobs/AppliedJobs';
import Statistics from './layouts/Statistics/Statistics';
import Blogs from './layouts/Blogs/Blogs';
import JobDetails from './layouts/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../public/jobs.json') //do not load all data.load only
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
