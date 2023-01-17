import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar.jsx';
import Detail from '../components/Datail.jsx';

const CareersDetail = () => {
    return (

        <>
            <NavBar />    
            <div className="mx-auto max-w-7xl py-5 px-1 text-center sm:px-6 lg:py-7 lg:px-3">
                <h1 className="text-6xl font-extrabold text-green-600">
                    Careers
                </h1>

            </div>
            <Detail/>
            <Footer />
        </>
    )
}

export default CareersDetail