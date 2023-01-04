import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar.jsx';
import spinner from '../assets/Spinner.svg';
const Forum = () => {
  return (
    <>
          <NavBar />
          <div className="mx-auto max-w-7xl py-5 px-1 text-center sm:px-6 lg:py-7 lg:px-3">
              <h1 className="text-6xl font-extrabold text-green-600">
                  Forum
              </h1>
              
          </div>

          <section class="hero container max-w-screen-lg mx-auto pb-10 text-center mt-10">
              <img className='mx-auto w-20' src={spinner} alt="loading" />
              <h1 className="text-1xl font-light text-green-600">
                  Please Wait!
              </h1>
          </section>
          <Footer/>
      </>
  )
}

export default Forum