import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../utils/userSlice'

const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
   const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  
    const handleshowPassword = () => {
        setShowPassword(!showPassword) 
  }

  const { register, handleSubmit, formState: { errors },reset } = useForm()
  const onSubmit = async (data) => {
        
            try {
           const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                method: 'POST',
                headers: {
                    'content-type':'application/json',
                },
                body: JSON.stringify(data),
           })
        
        const jsonData = await response.json()
                console.log(jsonData.user_data[0]);
                
                 
        if (jsonData.status) {
            const { user_id, user_firstname, user_lastname, user_email, user_phone } = jsonData.user_data[0]
            dispatch(addUser({ user_id: user_id, user_firstname: user_firstname, user_lastname: user_lastname, user_email: user_email, user_phone: user_phone }))
            setErrorMessage(jsonData.msg);

          navigate("/dashboard")
          reset()
        } else {
            setErrorMessage(jsonData.msg);
        }
        
    } catch (error) {
        setErrorMessage('An error occurred:', error);
  }
                 
    }

  return (
           <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8' onSubmit={handleSubmit(onSubmit)}>
                  <h2 className='text-4xl dark:text-white font-bold text-center'>SIGNIN</h2>
                  
                <div className='flex flex-col text-gray-900 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg mt-2 p-2 focus:border-blue-500  focus:outline-none' type="text" {...register("user_email", {
                        required: "Email is required",
                        pattern: {                
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address"
                        }
                    })} />
                      {errors.user_email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className='flex flex-col text-gray-900 py-2'>
                      <label>Password</label>
                      <input className='p-2 rounded-lg mt-2 focus:border-blue-500  focus:outline-none' type={showPassword ? "text" : "password"}
                          {...register("user_password", {
                            required: "Password is required",
                            minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                            },
                            pattern: {
                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                            message: "Password must include uppercase, lowercase, number, and special character"
                            }
                        })}
                      />
                      
                       <div className="absolute  right-48 mt-9  pr-8 flex items-center text-gray-500 cursor-pointer"  onClick={handleshowPassword} > {showPassword ? "Hide" : "Show" }
                      </div>
                      {errors.user_password && <p className='text-red-600'>{errors.password.message}</p>}
                </div>
                  <p className='text-red-500'>{errorMessage} </p>
                  
                  <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'> SIGNIN</button>
                  
               
                  </form>
        </div>
  )
}

export default Signin