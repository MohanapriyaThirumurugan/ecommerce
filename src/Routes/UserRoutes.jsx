import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from '../components/user/Cart'
import Home from '../components/user/Home'
import Productuser from '../components/user/Productuser'
import Topbar from '../components/common/Topbar'
function UserRoutes() {
  return (
    <>
    <Topbar/>
    <Routes>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='Product/:id' element={<Productuser/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='*' element={<Navigate to='/'/>}></Route>
    </Routes>   
 </>
  )
}

export default UserRoutes