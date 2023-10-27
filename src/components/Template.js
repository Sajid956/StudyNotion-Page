import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({page, heading, desc1, desc2, image1, image2, isLoggedIn, setIsLoggedIn}) => {

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row'>

        <div className='w-11/12 max-w-[450px] mx-auto md:mx-0'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{heading}</h1>

            <div className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <p className=' text-richblack-100 tracking-wide'>{desc1}</p>
                <p className='text-blue-100 italic tracking-wide'>{desc2}</p>
            </div>

            {
                page === 'login' ? (<LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />) : (<SignupForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)
            }

            <div className='w-full flex items-center gap-x-2 my-4'>
                <div className='flex-1 h-[1px] bg-richblack-700'></div>
                <div className='text-richblack-700 font-medium text-[0.875rem] leading-[1.375rem] uppercase'>or</div>
                <div className='flex-1 h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-100 border border-richblack-700 tracking-wide'>
                <FcGoogle className='text-xl' />
                Sign in with Google
            </button>
        </div>

        <div className='relative'>
            <img src={image1} alt='userImage' width='450' height='504' loading='lazy' className=' absolute -top-4 right-4 '/>
            <img src={image2} alt='backgroundImage' width='450' height='504' loading='lazy' />
        </div>


    </div>
  )
}

export default Template