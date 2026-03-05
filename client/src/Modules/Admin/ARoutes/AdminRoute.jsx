import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AHome from '../AComponents/AHome'
import SideBar from '../AComponents/SideBar'
import ManageUser from '../AComponents/ManageUser'
import ManageCategory from '../AComponents/ManageCategory'
import ManageProduct from '../AComponents/ManageProduct'
import AddCategory from '../AComponents/AddCategory'
export default function AdminRoute() {
  return (
    <div>
      <SideBar/>
      <Routes>
        <Route path='/Ahome' element={<AHome/>}/>
        <Route path='/ManageUser' element={<ManageUser/>}/>
        <Route path='/ManageCategory' element={<ManageCategory/>}/>
        <Route path='/ManageProduct' element={<ManageProduct/>}/>
        <Route path='/AddCategory' element={<AddCategory/>}/>
      </Routes>
    </div>
  )
}
