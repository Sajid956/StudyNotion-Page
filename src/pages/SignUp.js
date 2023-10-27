import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.png'
import frame from '../assets/frame.png'

const SignUp = ({isLoggedIn, setIsLoggedIn}) => {
  const content = {
    page: 'signin',
    heading: 'Join the millions learning to code with StudyNotion for free',
    desc1 : 'Build skills for today, tomorrow, and beyond.', 
    desc2 : 'Education to future-proof your career.',
    image1 : signup,
    image2 : frame,
  }

  return (
    <Template {...content} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  )
}

export default SignUp