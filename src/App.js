import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></NavBar>

      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
