import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard'
import AddProduct from '../components/Admin/AddProduct'
import Editproduct from '../components/Admin/Editproduct'
import Topbar from '../components/common/Topbar'
function AdminRoutes() {
  return (
   <>
     <Topbar/>
     <Routes>
    <Route path='dashboard' element={<Dashboard/>}></Route>
    <Route path='Addproduct' element={<AddProduct/>}></Route>
    <Route path='Edituser/:id' element={<Editproduct/>}></Route>
    <Route path='/*' element={<Navigate to='dashboard'/>}></Route>
    </Routes>  </>
  )
}

export default AdminRoutes