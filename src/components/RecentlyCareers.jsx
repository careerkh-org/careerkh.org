import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = '715818f7d4b5d83a8387b8d708886d510063faa654c9c987fdff78976b615af1b16560db72ea01ff45f5146f0a6e97b0c836bf56e70fd343890444528ffdddce381ed07b198a620c4a2650c9eaf691bc7542d3d75f52488b6f55047f661ba716e7c260e45309a49d9e3dd3bcf6c27b67e55a9dc4f30015b0ff876e1690088bf2'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default function RecentlyCareers() {
    const [ careers, setCareers ] = useState([]);
    const { data } = careers;

    useEffect(() => {
        axios.get('https://strapi-production-cf63.up.railway.app/api/careers', config)
            .then(res => {
                console.log(res)
                setCareers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-14">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recently Careers</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.

                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {data && data.length
                        ? data.slice(data.length - 3, data.length).map((career) => (
                            <div key={career.attributes.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="h-48 w-full object-cover" src={career.attributes.imageUrl} alt="" />
                                </div>
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-primary_600">
                                            <a href={career.attributes.href} className="hover:underline">
                                                {career.attributes.industry}
                                            </a>
                                        </p>
                                        <a href={career.attributes.href} className="mt-2 block">
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

                                        </a>
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-primary_600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary_700 justify-center mt-6"
                                    >
                                        More
                                    </button>
                                </div>
                            </div>
                        )) : "No Careers"
                    }
                </div>
            </div>
        </div>
    )
}