
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const major = [
    { id: 1, name: 'ITE' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Math' },

]

const career = [
    { id: 1, name: 'WEB' },
    { id: 2, name: 'APP' },
    { id: 3, name: 'Database' },

    // More users...
]

const position = [
    { id: 1, name: 'Front' },
    { id: 2, name: 'Back' },
    { id: 3, name: 'Hybrid' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectSearch() {

    const [query, setQuery] = useState('')
    const [selectedMajor, setselectedMajor] = useState(null)
    const [selectedCareer, setselectedCareer] = useState(null)
    const [selectedPosition, setselectedPosition] = useState(null)

    const filteredMajor =
        query === ''
            ? major
            : major.filter((major) => {
                return major.name.toLowerCase().includes(query.toLowerCase())
            })

    const filteredCareer =
        query === ''
            ? career
            : career.filter((career) => {
                return career.name.toLowerCase().includes(query.toLowerCase())
            })

    const filteredPosition =
        query === ''
            ? position
            : position.filter((position) => {
                return position.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className="bg-primary_300" aria-labelledby="footer-heading">

            <div className="mx-auto max-w-7xl py-7 px-4 sm:px-6 lg:py-10 lg:px-8">

                <div className=" pt-4 lg:flex lg:items-center lg:justify-evenly xl:mt-0">


                    {/* assign to */}
                    <div className="mt-4 sm:flex sm:max-w-md lg:mt-0">
                        <Combobox as="div" value={selectedMajor} onChange={setselectedMajor}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Assigned to</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(major) => major?.name}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredMajor.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredMajor.map((major) => (
                                            <Combobox.Option
                                                key={major.id}
                                                value={major}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-primary_600 text-white' : 'text-gray-900'
                                                    )
                                                }
                                            >
                                                {({ active, selected }) => (
                                                    <>
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{major.name}</span>

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
                    <div className="mt-4 sm:flex sm:max-w-md lg:mt-0">
                        <Combobox as="div" value={selectedCareer} onChange={setselectedCareer}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Career</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(career) => career?.name}
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
                    <div className="mt-4 sm:flex sm:max-w-md lg:mt-0">
                        <Combobox as="div" value={selectedPosition} onChange={setselectedPosition}>
                            <Combobox.Label className="block text-sm font-medium text-gray-700">Position</Combobox.Label>
                            <div className="relative mt-1">
                                <Combobox.Input
                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary_500 focus:outline-none focus:ring-1 focus:ring-primary_500 sm:text-sm"
                                    onChange={(event) => setQuery(event.target.value)}
                                    displayValue={(position) => position?.name}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredPosition.length > 0 && (
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {filteredPosition.map((position) => (
                                            <Combobox.Option
                                                key={position.id}
                                                value={position}
                                                className={({ active }) =>
                                                    classNames(
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                        active ? 'bg-primary_600 text-white' : 'text-gray-900'
                                                    )
                                                }
                                            >
                                                {({ active, selected }) => (
                                                    <>
                                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{position.name}</span>

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
                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:space-x-6">
                        <button
                            type="button"
                            className="inline-flex items-center text-xs font-medium text-grey-400 focus:outline-none focus:ring-offset-2 font-inter text-gray-500"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded border border-transparent bg-green-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-inter"
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
