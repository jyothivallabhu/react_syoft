import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        {
            path: "/dashboard",
            element : <Dashboard />
        }
    ])
    
  return (
      <div>
         <RouterProvider router={appRouter} ></RouterProvider>
          
    </div>
  )
}

export default Body