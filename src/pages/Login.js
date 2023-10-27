import React from 'react'
import Template from '../components/Template'
import login from '../assets/login.png'
import frame from '../assets/frame.png'

const Login = ({isLoggedIn, setIsLoggedIn}) => {

  const content = {
    page: 'login',
    heading: 'Welcome Back',
    desc1 : 'Build skills for today, tomorrow, and beyond.', 
    desc2 : 'Education to future-proof your career.',
    image1 : login,
    image2 : frame,

  }

  return (
    <Template {...content} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  )
}

export default Login