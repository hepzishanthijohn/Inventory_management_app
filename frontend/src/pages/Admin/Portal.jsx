import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/Admin/Sidebar/Sidebar';
import AdminNavbar from  '../../pages/Admin/AdminNavbar/AdminNavbar'
import './Admin/Admin.css'



function Portal() {
    return (
        <>
       <AdminNavbar/>
        <div className='admin'>
            
            <Sidebar/>
            <Outlet></Outlet>
            
        </div>
        </>
    )
}

export default Portal