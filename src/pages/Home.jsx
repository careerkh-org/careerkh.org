import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import RecentlyCareers from '../components/RecentlyCareers'
import FAQ from '../components/FAQ'

import SelectSearch from '../components/SelectSearch'

const Home = () => {
  return (
    <>
      <Hero />
      <SelectSearch />
      <RecentlyCareers />
      <FAQ />
      <Footer />

    </>
  )
}

export default Home