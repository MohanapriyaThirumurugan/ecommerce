import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { Navigate, useLocation,useNavigate } from 'react-router-dom';
import Dashboard from '../Admin/Dashboard';
import AddProduct from '../Admin/AddProduct';
const adminpaths=[{
     name:'Dashboard',
     path:'/admin/dashboard'
},
{
  name:'AddProduct',
  path:'/admin/Addproduct'
}
]
const userpaths=[{
  name:'Home',
  path:'/'
},
{
name:'Cart',
path:'/Cart'
}
]
function Topbar() {
  let [paths,setpaths]=useState([])
  let location =useLocation()
  let navigate=useNavigate()
  // console.log(location);
  useEffect(()=>{
    let paths=location.pathname.split('/')
    if(paths.includes('admin'))
    {
      setpaths(adminpaths)
    }
    else
    {
      setpaths(userpaths)
    }
  },[])
  return <>
    <Nav variant="underline" defaultActiveKey="/home">
      <h1 onClick={()=>navigate('/')}>shopicart</h1>
      <Nav.Item>
        {
          paths.map((e,i)=>{
            return <Nav.Link onClick={()=>navigate(e.paths)} key={i}>{e.name}</Nav.Link>
          })
        }
     
      </Nav.Item>
    
</Nav>
</>
}




export default Topbar