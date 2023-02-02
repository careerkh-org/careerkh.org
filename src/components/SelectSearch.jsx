
import React, { useState, useEffect } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import axios from 'axios';

const token = '1f3426922e233fe969712a6f46f57e588cab4bca4a5b8efdb6396734c1a58f83250be628158c2923248201b56958e2961006879888f03dbb3f0720e99d57dcbb7df84b57decd85afdcd349e0bc9c9d778c1b4d11d81da7227ebc625fbb8c308859aaf8eaa8b9b0bf11ea04d7996114f065dcaf251dad43dc0895cb39b61efa2d'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectSearch() {
    const [ careers, setCareers ] = useState([])
    const [ industries, setIndustries ] = useState([])
    const [ locations, setLocations ] = useState([])

    const [ careersQuery, setCareersQuery ] = useState('')
    const [ industriesQuery, setIndustriesQuery ] = useState('')
    const [ locationsQuery, setLocationsQuery ] = useState('')

    const [ selectedCareer, setselectedCareer ] = useState(careers)
    const [ selectedIndustry, setselectedIndustry ] = useState(industries)
    const [ selectedLocation, setselectedLocation ] = useState(locations)

    let endpoints = [
        'https://careerkh-backend.up.railway.app/api/careers?populate=locations&populate=industries',
        'https://careerkh-backend.up.railway.app/api/industries',
        'https://careerkh-backend.up.railway.app/api/locations',
    ];

    useEffect(() => {
        axios.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
            axios.spread(({ data: careers }, { data: industries }, { data: locations }) => {
                setCareers(careers.data)
                setIndustries(industries.data)
                setLocations(locations.data)

                console.log("SelectSearch")
                console.log({ careers, industries, locations });
            })
        );
    }, [])

    const filteredIndustry =
        industriesQuery === ''
            ? industries
            : industries.filter((industry) => {
                return industry.attributes.name.toLowerCase().includes(industriesQuery.toLowerCase())
            })

    const filteredLocation =
        locationsQuery === ''
            ? locations
            : locations.filter((location) => {
                return location.attributes.city.toLowerCase().includes(locationsQuery.toLowerCase())
            })
    const filteredCareer =
        careersQuery === ''
            ? careers
            : careers.filter((career) => {
                return career.attributes.caption.toLowerCase().includes(careersQuery.toLowerCase())
            })
    return (
        <div className="bg-primary_300" aria-labelledby="footer-heading">



            {/* <p>test length: {careers.length}</p>

            <p>test attributes: </p>
            {careers && careers.length ? careers.map((career) => (
                <p>{career.attributes.caption}</p>
            )) : 0} */}



            <div className="mx-auto max-w-7xl py-7 px-4 sm:px-6 lg:py-10 lg:px-8 ">
                <div className=" pt-4 lg:flex lg:items-center lg:justify-evenly xl:mt-0 ">
                    {/* industry */}
                    <div className="mt-4 lg:mt-0 sm:justify-center">
                        <Combobox as="div" value={selectedIndustry} onChange={setselectedIndustry}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Industry</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setIndustriesQuery(event.target.value)}
                                    displayValue={(industries) => industries.attributes?.name}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>
                                {filteredIndustry.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredIndustry.map((industry) => (
                                            <Combobox.Option
                                                key={industry.id}
                                                value={industry}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-primary_600 text-white' : 'text-gray-900'
                                                    )
                                                }
                                            >
                                                {({ active, selected }) => (
                                                    <>
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{industry.attributes.name}</span>
                                                        {selected && (
                                                            <span
                                                                className={classNames(
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                    active ? 'text-white' : 'text-primary_600'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}
                            </div>
                        </Combobox>
                    </div>

                    {/* location */}
                    <div className="mt-4 lg:mt-0 sm:justify-center">
                        <Combobox as="div" value={selectedLocation} onChange={setselectedLocation}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Location</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setLocationsQuery(event.target.value)}
                                    displayValue={(locations) => locations.attributes?.city}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredLocation.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredLocation.map((location) => (
                                            <Combobox.Option
                                                key={location.id}
                                                value={location}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-primary_600 text-white' : 'text-gray-900'
                                                    )
                                                }
                                            >
                                                {({ active, selected }) => (
                                                    <>
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{location.attributes.city}</span>

                                                        {selected && (
                                                            <span
                                                                className={classNames(
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                    active ? 'text-white' : 'text-primary_600'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}
                            </div>
                        </Combobox>

                    </div>

                    {/* career */}
                    <div className="mt-4 lg:mt-0 sm:justify-center">
                        <Combobox as="div" value={selectedCareer} onChange={setselectedCareer}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Career</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setCareersQuery(event.target.value)}
                                    displayValue={(career) => career.attributes?.caption}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredCareer.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredCareer.map((career) => (
                                            <Combobox.Option
                                                key={career.id}
                                                value={career}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-primary_600 text-white' : 'text-gray-900'
                                                    )
                                                }
                                            >
                                                {({ active, selected }) => (
                                                    <>
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{career.attributes.caption}</span>

                                                        {selected && (
                                                            <span
                                                                className={classNames(
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                    active ? 'text-white' : 'text-primary_600'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                )}
                            </div>
                        </Combobox>

                    </div>
                    {/* clear & submit */}
                    <div className="hidden max-sm:flex sm:flex sm:pt-4 sm:justify-center lg:ml-4 lg:pb-0 lg:flex lg:items-center lg:space-x-6 sm:space-x-6 max-sm:space-x-6 max-sm:justify-center max-sm:my-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-xs font-medium text-grey-400 text-gray-500 hover:text-gray-700"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded border border-transparent bg-primary_600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm  hover:bg-primary_700 font-inter"
                        >
                            Submit
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}