import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SelectSearch from '../components/SelectSearch'
import RecentlyCareers from '../components/RecentlyCareers'
import FAQ from '../components/FAQ'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <SelectSearch />
    <RecentlyCareers />
    <FAQ />
    <Footer />
  </React.StrictMode>
)
