import React, { useState, useEffect } from 'react';
import axios from 'axios';
import spinner from '../assets/Spinner.svg'
const token = '1f3426922e233fe969712a6f46f57e588cab4bca4a5b8efdb6396734c1a58f83250be628158c2923248201b56958e2961006879888f03dbb3f0720e99d57dcbb7df84b57decd85afdcd349e0bc9c9d778c1b4d11d81da7227ebc625fbb8c308859aaf8eaa8b9b0bf11ea04d7996114f065dcaf251dad43dc0895cb39b61efa2d'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default function Career() {
    const [ careers, setCareers ] = useState([]);
    const { data } = careers;

    useEffect(() => {
        axios.get('https://careerkh-backend.up.railway.app/api/careers?populate=locations&populate=industries', config)
            .then(res => {
                console.log(res)
                setCareers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-0 lg:pb-14">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Careers</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-7xl lg:grid-cols-2">
                {data && data.length
                    ? data.map((career) => (
                        <div key={career.attributes.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={career.attributes.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <a href={career.attributes.href} className="mt-2 block">
                                        <div className='grid grid-flow-row-dense grid-cols-3'>

                                            <div className=' col-span-2'>
                                                <p className="text-xl font-semibold text-gray-900">{career.attributes.position}</p>
                                                <p className="my-3 text-base text-gray-500">{career.attributes.caption}</p>

                                                <div className="flex align-middle items-center text-center py-2">
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                    <p className="mx-3 text-base text-gray-500">{career.attributes.term}</p>
                                                </div>

                                                <div className="flex align-middle items-center text-center py-2">
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>                                            <p className="mx-3 text-base text-gray-500">
                                                        {career.attributes.locations.data.map((location) => (
                                                            <h1>{location.attributes.city}</h1>
                                                        ))}
                                                    </p>
                                                </div>

                                                <div className="flex align-middle items-center text-center py-2">
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>                                            <p className="mx-3 text-base text-gray-500">{career.attributes.date}</p>
                                                </div>
                                            </div>
                                            <div className=' flex justify-end'>
                                                <div className='w-[200px] h-[200px] bg-[#F8F8F8] grid grid-flow-cols-dense grid-row-3 content-center'>
                                                    <div className=' font-bold text-xl text-center' >
                                                        10 Views
                                                    </div>
                                                    <div className=' text-center mt-[10px]'>
                                                        Learn more about membership policy
                                                    </div>

                                                    <div className=' flex justify-center'>
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center rounded-md border border-transparent bg-[#1F2937] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary_700 justify-center mt-6 w-3/4"
                                                        >
                                                            Expand
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className=''>

                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>
                    )) :
                    <section class="hero container max-w-screen-lg mx-auto pb-10 text-center mt-10 col-span-3">
                        <img className='mx-auto w-20' src={spinner} alt="loading" />
                        <h1 className="text-1xl font-light text-green-600">
                            Please Wait!
                        </h1>
                    </section>
                }
            </div>
        </div>
    )
}