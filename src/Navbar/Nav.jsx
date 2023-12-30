import React from 'react'
import './Nav.css'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
     
        <div className = 'navbar navbar-expand-lg navbar-dark bg-dark'> 
        <div className="container">
         <span className='navbar-brand '> <div className='h3'> Logo </div> </span>
         <button className='navbar-toggler' type = 'button' data-bs-toggle = 'collapse' data-bs-target = '#name'>
            <span className='navbar-toggler-icon'></span>
         </button>
         <div className='collapse navbar-collapse' id = '#name'>
            <ul className='navbar-nav ms-5'>
                <li className = 'nav-item ms-5'>
                    <Link to="home" className='nav-link text-white h5'> Home </Link>
                </li>
                <li className = 'nav-item ms-5'>
                    <Link to="about" className='nav-link text-white h5'> About </Link>
                </li>
                <li className = 'nav-item ms-5'>
                
                    <Link to="catagory" className='nav-link text-white h5 myCat'> Catagory </Link>
                    <div className='dropDown'>

                    <Link to = '/catagory/comp1'>
                    <h4>Catagory1</h4> 
                    </Link>
                    <Link to = '/catagory/comp2'>
                    <h4 style={{position:'relative',top:'25%'}}>Catagory2</h4>
                    </Link>
                     </div>
                </li>
                <li className = 'nav-item ms-5'>
                    <Link to="news" className='nav-link text-white h5'> News </Link>
                </li>
                <div className='ms-5'>
                <li className = 'nav-item ms-5'>
                    <Link to="signup" className='nav-link text-white h5'> SignUp </Link>
                </li>
                </div>
            </ul>

         </div>
        </div>
        </div>

        <Outlet />
    </>

  
  )
}

export default Nav