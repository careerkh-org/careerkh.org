
import React, { useState, useEffect } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import axios from 'axios';

const token = '7184cdcc318b099cf5c37e08014d29cfa662264dbb7ded22db66652abb778b3368b9f17526fd0e9608ef44fcc3a52ef1f4308b1caf69780975c766d2f78b07b4e86f8be063ca4327fff16c347e40e402c43d624cf1d9481a702c48d700fdb507077f45b91be32508226e13c63374ee49e877caf67c743ef2fcc41309adaf9194'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const industry = [
    { id: 0, name: 'Information Technology' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectSearch() {
    const [ careers, setCareers ] = useState([])
    const { data } = careers

    const [ query, setQuery ] = useState('')
    const [ selectedIndustry, setselectedIndustry ] = useState(industry[ 0 ])
    const [ selectedPosition, setselectedPosition ] = useState(data)
    const [ selectedCareer, setselectedCareer ] = useState(data)

    useEffect(() => {
        axios.get('https://careerkh-api.up.railway.app/api/careers', config)
            .then(res => {
                console.log('SelectSearch')
                console.log(res.data.data)

                setCareers(res.data.data)


            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const filteredIndustry =
        query === ''
            ? industry
            : industry.filter((industry) => {
                return industry.name.toLowerCase().includes(query.toLowerCase())
            })

    const filteredPosition =
        query === ''
            ? careers
            : careers.attributes.position.filter((position) => {
                return position.toLowerCase().includes(query.toLowerCase())
            })
    const filteredCareer =
        query === ''
            ? careers
            : careers.attributes.caption.filter((caption) => {
                return caption.toLowerCase().includes(query.toLowerCase())
            })
    return (
        <div className="bg-primary_300" aria-labelledby="footer-heading">
            {/* <ul>
                {
                    careers
                        .map(career =>
                            <li key={career.id}>{career.attributes.position}</li>
                        )
                }
            </ul> */}
            <div className="mx-auto max-w-7xl py-7 px-4 sm:px-6 lg:py-10 lg:px-8 ">

                <div className=" pt-4 lg:flex lg:items-center lg:justify-evenly xl:mt-0 ">


                    {/* industry */}
                    <div className="mt-4 lg:mt-0 sm:justify-center">
                        <Combobox as="div" value={selectedIndustry} onChange={setselectedIndustry}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Industry</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(career) => career?.name}

                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredIndustry.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredIndustry.map((career) => (
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
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{career.name}</span>

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

                    {/* position */}
                    <div className="mt-4 lg:mt-0 sm:justify-center">
                        <Combobox as="div" value={selectedPosition} onChange={setselectedPosition}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Position</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(career) => career?.id}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredPosition.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredPosition.map((career) => (
                                            <Combobox.Option
                                                key={career.id}
                                                value={career.attributes.position}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-primary_600 text-white' : 'text-gray-900'
                                                    )
                                                }
                                            >
                                                {({ active, selected }) => (
                                                    <>
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{career.attributes.position}</span>

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
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(career) => career?.id}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredCareer.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredCareer.map((career) => (
                                            <Combobox.Option
                                                key={career.id}
                                                value={career.attributes.caption}
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
                            className="inline-flex items-center rounded border border-transparent bg-green-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-primary_700 font-inter"
                        >
                            Submit
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}