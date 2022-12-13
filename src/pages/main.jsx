import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import Roadmap from './Roadmap'
import Forum from './Forum'
import Login from './Login'
import Signin from '../components/Signin'
import Error404 from '../components/Error404'


const main = () => {
  return (
    <React.StrictMode>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/careers' element={<Careers/>}></Route>
      <Route path='/roadmap' element={<Roadmap/>}></Route>
      <Route path='/forum' element={<Forum/>}></Route>
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/error404' element={<Error404/>}></Route>
    </Routes>
    
  </React.StrictMode>
  );
};
  
export default main;
