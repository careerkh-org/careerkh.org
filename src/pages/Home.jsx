import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import FAQ from '../components/FAQ'
import NavBar from '../components/NavBar.jsx';
import SelectSearch from '../components/SelectSearch'
import Category from '../components/Category '
import RecentlyRoadmap from '../components/RecentlyRoadmap'


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Category/>
      <RecentlyRoadmap />
      <FAQ />
      <Footer />

    </>
  )
}

export default Home