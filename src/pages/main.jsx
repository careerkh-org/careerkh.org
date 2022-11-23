import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import NavBar from '../components/NavBar'
import Error404 from '../components/Error404'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Footer />
  </React.StrictMode>
)
