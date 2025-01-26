import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaPlus, FaListUl } from 'react-icons/fa'; // Importing icons from react-icons

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/home" style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <FaHome size={24} className='icons'/>
          <p>Home</p>
        </div>
      </Link>

      <Link to="/dashboard" style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <FaTachometerAlt size={24} className='icons'/>
          <p>Dashboard</p>
        </div>
      </Link>

      <Link to="/addproduct" style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <FaPlus size={24} className='icons'/>
          <p>Add Product</p>
        </div>
      </Link>

      <Link to="/listproduct" style={{textDecoration:"none"}}>
        <div className="sidebar-item">
          <FaListUl size={24} className='icons'/>
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
