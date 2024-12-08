import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Community from './pages/Community.jsx'

function App() {
  const location = useLocation();
  const isCommunityPage = location.pathname === '/Community';
  const isProfilePage = location.pathname === '/Profile';

  return (
    <>
      {!isCommunityPage && !isProfilePage && <Navbar/>}
      <Outlet/>
    </>
  )
}

export default App
