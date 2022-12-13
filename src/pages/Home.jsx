import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import RecentlyCareers from '../components/RecentlyCareers'
import FAQ from '../components/FAQ'
import NavBar from '../components/NavBar.jsx';
import SelectSearch from '../components/SelectSearch'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <SelectSearch />
      <RecentlyCareers />
      <FAQ />
      <Footer />

    </>
  )
}

export default Home