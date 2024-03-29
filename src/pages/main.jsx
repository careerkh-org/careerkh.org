import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from '../components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import Roadmap from './Roadmap'
import Forum from './Forum'
import Login from '../components/Login'
import Error404 from '../components/Error404'
import Signup from '../components/signup.jsx'
import Dashboard from '../components/Dashboard'
import { AuthContextProvider } from '../context/AuthContext'
import Myaccount from './Myaccount'
import ProtectedRoute from '../components/ProtectedRoute'
import CareersDetail from './CareersDetail'

const main = () => {
  return (
    <React.StrictMode>

      <AuthContextProvider>

      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/roadmap' element={<Roadmap/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>

      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/careersdetail' element={<CareersDetail/>}></Route>
      <Route path='/myaccount' element={<ProtectedRoute><Myaccount/></ProtectedRoute> }></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path="/forum" element={<External />} />
    </Routes>
    
      </AuthContextProvider>

  </React.StrictMode>
  );
};
function External() {
  window.location.href = 'https://forum.careerkh.org/';
  return null;
}
export default main;
