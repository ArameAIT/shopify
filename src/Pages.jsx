import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from './Components/MainLayout';
import App from './App';
import Basket from './Basket';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path : "",
            element: <App/>
        },
        {
            path : "basket",
            element: <Basket/>
        }
      ]
    },
  ]);

function Pages() {
    
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default Pages