import React, {  useContext, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminNavbar.css';
import logo from '../../Assets//Admin_Assets/logo3.jpg';

import { Link } from 'react-router-dom';



const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  
  const menuRef = useRef();
  const navigate = useNavigate();
  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        
       <div className='nav-logo'>
       <img src={logo} alt="" id='logo-sp' />
       <p>Inventory Management </p>  </div>      
        
        {/* <div className='nav-login-cart'>
        <Link style={{textDecoration:"none"}} to='/'><button className='btn btn-primary'>Logout</button></Link>
        </div> */}
    </div>
  )
}

export default Navbar