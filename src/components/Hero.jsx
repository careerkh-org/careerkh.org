/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    return (
        <div className="relative overflow-hidden">

            <main>
                <div className="bg-white pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                <div className="lg:py-24">
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-full bg-purple-400 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                                    >
                                        <span className="rounded-full bg-green-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                            We'RE WORKING
                                        </span>
                                        <span className="ml-4 text-sm">Visit our contact page</span>
                                        <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    </a>
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block text-green-400">Career Description</span>
                                        <span className="block ">in Cambodia</span>
                                    </h1>
                                    <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        We provide the information about career in cambodia.
                                        Over 100 career around the country. Find your best career
                                        to work in Careerkh.
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <div action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                                            <div className="sm:flex">
                                                <div className="mt-0 sm:mt-0 sm:ml-0">
                                                    <button
                                                        type="submit"
                                                        className="block w-full rounded-md bg-green-500 py-3 px-4 font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                    >
                                                        Explore
                                                    </button>
                                                </div>
                                            </div>


                                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                <span className="block text-green-400">30+</span>
                                            </h1>
                                            <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                                categories
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                    <img
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-100 lg:max-w-none"
                                        src="src/public/images/hero.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
