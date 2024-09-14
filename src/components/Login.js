import React, { useEffect, useState } from 'react'
import Signin from './Signin'
import Signup from './Signup' 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
   const user = useSelector((store) => store.user)

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm) 
    }
    
    const isAuthenticated = user.isAuthenticated;

    useEffect(() => {
        const unsubscribe = (user) => {
           console.log(isAuthenticated);
            if (isAuthenticated) {
                navigate("/dashboard")
            }
        }
     return () => unsubscribe();
    }, [])
    
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
         <div class="flex items-center justify-center "> 
             <div class="absolute p-10 z-10 ">
                    <div class="mt-2">
                        <div class="transition-all transform   group-hover:opacity-100  group-hover:translate-y-0 "  >
                            <div class="p-2">
                                <p class="text-3xl text-white underline decoration-double   animate-bounce ">
                                    Welcome to
                                    Syoft 
                                </p>
                            </div>
                      </div>
                  </div>
              </div>
              <img className='w-full h-full object-cover relative block
                      group' src="https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1060&t=st=1726232891~exp=1726233491~hmac=6406a3bce3b8e25e8f32885ab41d9aad8f9545aa262df4f3a97a3a9aab366a48" alt="" />          
          </div>
          <div className='bg-gray-100 flex flex-col justify-center'>
              <div>
                  {isSignInForm ? <Signin /> : <Signup />}
                  <div className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 flex justify-between text-black  py-0'>
                     <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New User? Click Here to  SignUp' : 'Already Registere? Signin Here'}</p>
                  </div>
               </div>
         </div>
     </div>
  )
}

export default Login