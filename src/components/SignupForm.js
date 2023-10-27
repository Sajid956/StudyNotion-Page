import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignupForm = ({isLoggedIn, setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", createPassword: "", confirmPassword: "" ,
    })

    const [user, setUser] = useState('student');
    const [createVisible, setCreateVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    function submitHandler(event) {
        event.preventDefault();

        if(formData.createPassword === formData.confirmPassword) {
            setIsLoggedIn(true);
            toast.success("Account Created Successfully");
            navigate("/dashboard");
        }
        else{
            toast.error('Password must be same');
        }
        
    }

  return (
    <div >

         {/* student and instructor */}
         <div className='max-w-max flex rounded-full bg-richblack-800 p-1 gap-x-1 my-6 border-b-[1px] border-gray-500 border-opacity-70'>
            <button 
                className={`${user === 'student' ? "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full tracking-wider transition-all duration-200`}

                onClick={() => setUser('student')}
                >

                Student
    
            </button>
            <button 
                className={`${user === 'instructor' ? "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full tracking-wider transition-all duration-200`}

                onClick={() => setUser('instructor')}
                >
                    
                Instructor

            </button>

        </div>

        <form onSubmit={submitHandler} >

            {/* first name and last name */}
            <div className='w-full flex justify-between'>

                <label>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                        First Name <sup className=' text-red-500'>*</sup><br/>
                    </p>
                    
                    <input 
                        type='text' 
                        placeholder='Enter first name' 
                        name='firstName' 
                        value={formData.firstName} 
                        onChange={changeHandler} 
                        required 
                        className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] border-gray-500 border-opacity-70 '  
                    />

                </label>

                <label>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                        Last Name <sup className=' text-red-500'>*</sup><br/>
                    </p>

                    <input 
                        type='text' 
                        placeholder='Enter last name' 
                        name='lastName' 
                        value={formData.lastName} 
                        onChange={changeHandler} 
                        required 
                        className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] border-gray-500 border-opacity-70 '  
                    />

                </label>


            </div>
        
            {/* email address */}
            <div className='mt-[20px]'>
                <label>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                        Email Address <sup className=' text-red-500'>*</sup><br/>
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
            </div>
            

            {/* create password and confirm password */}
            <div className='w-full flex justify-between mt-[20px]'>

                {/* create password */}
                <label className='relative'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                        Create Password <sup className=' text-red-500'>*</sup><br/>
                    </p>

                    <input 
                        type= {createVisible ? 'text' : 'password'}
                        placeholder='Enter Password' 
                        name='createPassword' 
                        value={formData.createPassword} 
                        onChange={changeHandler} 
                        required 
                        className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] border-gray-500 border-opacity-70 '
                    />

                    <span className='absolute text-richblack-100 text-2xl top-10 right-3 hover:cursor-pointer' onClick={() => setCreateVisible(prev => !prev)}>
                        {
                            createVisible ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                        }
                    </span>

                </label>

                {/* confirm password */}
                <label className='relative'>
                    <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>
                        Confirm Password <sup className=' text-red-500'>*</sup><br/>
                    </p>

                    <input 
                        type={confirmVisible ? 'text' : 'password'} 
                        placeholder='Confirm Password' 
                        name='confirmPassword' 
                        value={formData.confirmPassword} 
                        onChange={changeHandler} 
                        required 
                        className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full border-b-[1px] border-gray-500 border-opacity-70 '
                    />

                    <span className='absolute text-richblack-100 text-2xl top-10 right-3 hover:cursor-pointer' onClick={() => setConfirmVisible(prev => !prev)}>
                        {
                            confirmVisible ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                        }
                    </span>

                </label>

            </div>

            <button className='w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>
                Create Account
            </button>


        </form> 

    </div>
  )
}

export default SignupForm