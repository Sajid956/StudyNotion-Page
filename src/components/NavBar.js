import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

export const NavBar = ({isLoggedIn, setIsLoggedIn}) => {

  const navigate = useNavigate();

  function logoutHandler() {
    setIsLoggedIn(false);
    toast.success('Logged Out');
    navigate('/');
  }

  return (
    

    <div className='flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto text-white'>

      <Link to='/'>
        <img src={Logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <div>
        <ul className='flex justify-center items-center gap-6 opacity-90' >
          <li>
            <Link to='/' className=' tracking-wider'>Home</Link>
          </li>
          <li><Link to='#' className=' tracking-wider'>About</Link></li>
          <li><Link to='#' className=' tracking-wider'>Contact</Link></li>
        </ul>
      </div>

      <div className='flex justify-center items-center gap-4'>

        {
          !isLoggedIn && 
          <Link to='/login'>
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 tracking-wider'>Log in</button>
          </Link>
          
        }
        {
          !isLoggedIn &&
          <Link to='/signup'>
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 tracking-wider'>Sign up</button>
          </Link>
        }

        {
          isLoggedIn &&
          <Link to='/'>
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 tracking-wide' onClick={logoutHandler}>Log Out</button>
          </Link>
        }

        {
          isLoggedIn &&
          <Link to='/dashboard'>
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 tracking-wider'>Dashboard</button>
          </Link>
        }
      </div>

      
    </div>
  )
}
