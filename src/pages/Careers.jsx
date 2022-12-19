import React from 'react'
import SelectSearch from "../components/SelectSearch.jsx";
import Footer from '../components/Footer'
import NavBar from '../components/NavBar.jsx';
import Career from '../components/Career.jsx';
import Detail from '../components/Datail.jsx';

const Careers = () => {
    return (

        <>
            <NavBar />    
            <div className="mx-auto max-w-7xl py-5 px-1 text-center sm:px-6 lg:py-7 lg:px-3">
                <h1 className="text-6xl font-extrabold text-green-600">
                    Careers
                </h1>

            </div>
            <SelectSearch />
            {/* <Career></Career> */}
            <Detail></Detail>
            <Footer />
        </>



    )
}

export default Careers