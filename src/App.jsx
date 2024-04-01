import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from './Routes/AdminRoutes'
import UserRoutes from './Routes/UserRoutes'
// import New from './components/Admin/New.jsx'; 


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/admin/*' element={<AdminRoutes/>}/>
      <Route path='/*' element={<UserRoutes/>}/>
      {/* <Route path='/' element={<New/>}></Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App