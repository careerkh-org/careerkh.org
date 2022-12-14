import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from '../components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import Roadmap from './Roadmap'
import Forum from './Forum'
import Signin from '../components/Signin'
import Error404 from '../components/Error404'
import Signup from '../components/signup.jsx'

const main = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/roadmap' element={<Roadmap />}></Route>
        <Route path='/forum' element={<Forum />}></Route>
      </Routes>

    </React.StrictMode>
  );
};

export default main;
