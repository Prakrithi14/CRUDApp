import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import AddProduct from '../UComponents/AddProduct'
import Products from '../UComponents/Products'
import ProductDetails from '../UComponents/ProductDetails'
import Login from '../UComponents/Login'
import MyProfile from '../UComponents/MyProfile'
import BookingForm from '../UComponents/BookingForm'
import TrackStatus from '../UComponents/TrackStatus'

function AppContent(){
  const location=useLocation()
  const hidetopbar=["/"]
  return(
    <div>
    {!hidetopbar.includes(location.pathname) && <TopBar/>}
    <Routes>
        <Route path='/Home' element={<UHome/>}/>
        <Route path='/About' element={<UAbout/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/MyProfile' element={<MyProfile/>}/>
        <Route path='/TrackStatus' element={<TrackStatus/>}/>
        <Route path='/Product/:id' element={<ProductDetails/>}/>
          <Route path='/BookingForm/:productId' element={<BookingForm/>}/>

        <Route path='/AddProduct' element={<AddProduct/>}/>
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
