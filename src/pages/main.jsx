import React from 'react'
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

const main = () => {
  return (
    <React.StrictMode>
      <AuthContextProvider>

      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/roadmap' element={<Roadmap/>}></Route>
      <Route path='/forum' element={<Forum/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      
      <Route path='/myaccount' element={<ProtectedRoute><Myaccount/></ProtectedRoute> }></Route>
      <Route path='/error404' element={<Error404/>}></Route>
    </Routes>
    
      </AuthContextProvider>

  </React.StrictMode>
  );
};
  
export default main;