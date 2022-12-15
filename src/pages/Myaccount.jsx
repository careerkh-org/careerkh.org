import React from 'react'
import NavBar from '../components/NavBar.jsx';
import Dashboard from '../components/Dashboard.jsx';
import { Link ,useNavigate } from 'react-router-dom';
const Myaccount = () => {
    

  return (
    <>
      <NavBar />
      <Dashboard />
    </>
  )
}

export default Myaccount