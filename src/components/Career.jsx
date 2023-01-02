import React, { useState, useEffect } from 'react';
import axios from 'axios';
import spinner from  '../assets/Spinner.svg'
const token = '3112f54c3d928547abb0e005c1325f381fb33dc2a53953849f5bf7984633ab77052d2331dbbdb312c388b3cfda8baea1437676586769d2c9e06a95d73865ae62f76b6057e2274968f244f4e3937ad9a30d4c1bc6aec88cfd9250838c7925dca675abeb3fb51adfe63a8c1aab7f0c7057efc987b9dee70840639d144835d78e6b'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default function Career() {
    const [ careers, setCareers ] = useState([]);
    const { data } = careers;

    useEffect(() => {
        axios.get('https://careerkh-api.up.railway.app/api/careers', config)
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
                        ? data.slice(data.length - 5, data.length).map((career) => (
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
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>                                            <p className="mx-3 text-base text-gray-500">{career.attributes.location}</p>
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
                        )) : <div class=" h-full w-20 "><img src={spinner} alt="" /></div>
                    }
                </div>
        </div>
    )
}