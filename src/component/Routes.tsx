import React from 'react'
 import InterFace from './InterFace'
 import LogIn from './LogIn'
 import HomePage from './HomePage'
import { Routes as Routess, Route } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import SignUp from './SignUp'

function Routes() {



  return (
    <div>
        <nav>
            {/* <Nav/> */}
        </nav>
<Routess>
<Route path="/" element={<InterFace/>}></Route>
<Route path="/logIn" element={<LogIn/>}></Route>
<Route path="/saudiday" element={<HomePage/>}></Route>
<Route path="/signUp" element={<SignUp/>}></Route>
</Routess>
<footer>
    <Footer/>
</footer>
    </div>
  )
}

export default Routes