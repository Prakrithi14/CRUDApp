import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import AddProduct from '../UComponents/AddProduct'
import Products from '../UComponents/Products'

function AppContent(){
  const location=useLocation()
  const hidetopbar=["/"]
  return(
    <div>
    {!hidetopbar.includes(location.pathname) && <TopBar/>}
    <Routes>
        <Route path='/Home' element={<UHome/>}/>
        <Route path='/About' element={<UAbout/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/' element={<AddProduct/>}/>
      </Routes>
    </div>
  )
}

export default function UserRoute() {
  return (
    <div>
      <AppContent/>
      
    </div>
  )
}
