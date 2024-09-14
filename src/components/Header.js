import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_ICON } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        dispatch(removeUser())
        navigate("/")
    }

  return (
       <div className="absolute w-screen px-16 py-2  shadow-2xl  z-10 flex flex-col md:flex-row justify-between">
          <img className=" w-44 mx-auto md:mx-0" src="https://www.syoft.com/assets/img/logo-color.png" alt="logo" />
      
      {user &&
        <div className='flex'>
          
        <img
          className="hidden md:block w-12 h-12"
          alt="usericon"
          src={USER_ICON}
        />
        <button className='text-black font-bold' onClick={handleSignOut}>SignOut</button>
      </div>
      }
      
    </div>      
  )
}

export default Header