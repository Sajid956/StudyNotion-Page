import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const LoginForm = ({isLoggedIn, setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData( prev => (
            {
                ...prev,
                [event.target.name] : event.target.value,
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();

        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <div>
        <form onSubmit={submitHandler} className='w-full flex flex-col gap-y-4 mt-6 tracking-wide'>

            <label className='w-full'>
                <p 
                    className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                    Email Address 
                    <sup className=' text-red-500'>*</sup>
                </p>

                <input 
                    type='email'
                    placeholder='Enter email address'
                    name='email' 
                    value={formData.email}
                    onChange={changeHandler} 
                    required 
                    className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] border-gray-500 border-opacity-70 '  
                />

            </label>

            <label className='relative'>
                <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                    Password 
                    <sup className=' text-red-500 text-sm'>*</sup>
                </p>

                <input 
                    type={isVisible ? 'text' : 'password'} 
                    placeholder='Enter Password' 
                    name='password' 
                    value={formData.password} 
                    onChange={changeHandler} 
                    required 
                    className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] border-gray-500 border-opacity-70'
                />

                <span className='absolute text-richblack-100 text-2xl top-10 right-3 hover:cursor-pointer' onClick={() => setIsVisible(prev => !prev)}>
                    {
                        isVisible ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                    }
                </span>
                
            </label>

            <div className='text-right text-blue-100 text-xs tracking-wide -mt-3 hover:cursor-pointer'>Forgot Password</div>

            
            <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>Sign In</button>


        </form>
    </div>
  )
}

export default LoginForm