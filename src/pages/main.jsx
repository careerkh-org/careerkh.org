import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from '../components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import Roadmap from './Roadmap'
import Forum from './Forum'
import Auth from './Auth'

const main = () => {
  return (
    <React.StrictMode>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/roadmap' element={<Roadmap/>}></Route>
      <Route path='/forum' element={<Forum/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
    </Routes>
    
  </React.StrictMode>
  );
};
  
export default main;
