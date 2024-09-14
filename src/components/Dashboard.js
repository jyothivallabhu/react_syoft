import React, { useEffect } from 'react'
import Header from './Header'
import { USER_ICON } from '../utils/constants'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const user = useSelector((store) => store.user)
  
  useEffect(() => {
    const isAuthenticated = user.isAuthenticated;
    console.log(isAuthenticated);
    
    if (!isAuthenticated) {
        navigate("/")
    }
  },[])
  
  return (
    <div>
      <Header />
      <div className='w-full md:w-3/12 absolute p-12 shadow bg-gradient-to-r from-30% to-teal-400 from-blue-500  hover:from-pink-500 hover:to-orange-500 my-56 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 justify-center'>
        
        <img class="w-36 h-36 p-1 -mt-36 mx-14 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={USER_ICON} alt="Bordered avatar" />

        <div className='my-8'>
          <p className='text-black m-1 font-bold' > UserName: {user.userDetails.user_firstname} </p>
          <p className='text-black m-1 font-bold' > Email:  {user.userDetails.user_email} </p>
          <p className='text-black m-1 font-bold' > Mobile Number: {user.userDetails.user_phone} </p>
        </div>
        
            </div>
    </div>
  )
}

export default Dashboard