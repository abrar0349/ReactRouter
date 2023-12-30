import React from 'react'
import Nav from './Navbar/Nav'
import Home from './Navbar/component/Home'
import About from './Navbar/component/About'
import Catagory from './Navbar/component/Catagory'
import News from './Navbar/component/News'
import SignUp from './Navbar/component/SignUp'
import { Route, Routes } from 'react-router-dom'
import Comp1 from './Navbar/component/NestCom/Comp1'
import Comp2 from './Navbar/component/NestCom/Comp2'

export default function App() {
  return (
    <div>
        <Routes>
    
        <Route path = '' element = { <Nav />} >
        <Route path = 'home' element = { <Home />} />  
        <Route path = 'about' element = { <About />} />  

        <Route path = 'catagory' element = { <Catagory />} > 
        <Route path='/catagory/comp1' element = { <Comp1 />} />
        <Route path='/catagory/comp2' element = { <Comp2 />} />
        </Route>

        <Route path = 'news' element = { <News />} /> 
        <Route path = 'signup' element = { <SignUp />} /> 
        

        </ Route>
    
        </Routes>

 
        
    </div>
  )
}
