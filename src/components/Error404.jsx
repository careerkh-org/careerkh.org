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
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Error404() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <><div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                    <div className="mx-auto max-w-max">
                        <main className="sm:flex">
                            <p className="text-4xl font-bold tracking-tight text-green-600 sm:text-5xl">404</p>
                            <div className="sm:ml-6">
                                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                                    <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                                </div>
                                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                    <Link
                                    to="/"
                                    >
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Go back home
                                    </a>
                                    </Link>
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    >
                                        Contact support
                                    </a>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                </>
            )}

        </Disclosure>

    )
}

