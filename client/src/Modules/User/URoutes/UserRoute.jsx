import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'

export default function UserRoute() {
  return (
    <div>
      <TopBar/>
      <Routes>
        <Route path='/' element={<UHome/>}/>
        <Route path='/About' element={<UAbout/>}/>
      </Routes>
    </div>
  )
}
