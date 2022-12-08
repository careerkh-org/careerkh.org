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
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Outlet, Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
    const [ enabled, setEnabled ] = useState(false);

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <nav>
                        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                            <div className="flex h-16 sm:justify-center lg:justify-evenly max-sm:justify-center">
                                <div className="flex px-2 lg:px-0">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Link to="/">
                                            <img
                                                className="block h-20 w-auto lg:hidden"
                                                src="https://firebasestorage.googleapis.com/v0/b/careerkh-web.appspot.com/o/images%2Fcareerkh_hr_text.png?alt=media&token=ed87436f-c381-43d8-a49e-785a41e712a2"
                                                alt="Company"
                                            />
                                            <img
                                                className="hidden h-20 w-auto lg:block"
                                                src="https://firebasestorage.googleapis.com/v0/b/careerkh-web.appspot.com/o/images%2Fcareerkh_hr_text.png?alt=media&token=ed87436f-c381-43d8-a49e-785a41e712a2"
                                                alt="Company"
                                            />
                                        </Link>
                                    </div>

                                    <div className="hidden lg:ml-24 lg:flex items-center lg:space-x-10 justify-center">
                                        <Link className="inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter"
                                            to="/"
                                        >
                                            Home
                                        </Link>

                                        <Link className="inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter"
                                            to="/careers"
                                        >
                                            Careers
                                        </Link>


                                        <Link className="inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter"

                                            to="/roadmap"
                                        >
                                            Roadmap
                                        </Link>

                                        <Link
                                            className="inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter"
                                            to="/forum"
                                        >
                                            Forum
                                        </Link>
                                        <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-start">
                                            <div className="w-100 max-w-lg lg:max-w-xs">
                                                <label htmlFor="search" className="sr-only font-inter">
                                                    Search
                                                </label>
                                                <div className="relative">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <MagnifyingGlassIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <input
                                                        id="search"
                                                        name="search"
                                                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-green-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
                                                        placeholder="Search"
                                                        type="search"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden lg:ml-4 lg:flex lg:items-center lg:space-x-6">
                                            <button
                                                type="button"
                                                className="inline-flex items-center text-xs font-medium text-grey-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-inter"
                                            >
                                                Sign in
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded border border-transparent bg-green-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-inter"
                                            >
                                                Sign up
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>

                            </div>
                        </div>
                    </nav>
                    <Outlet />

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {/* Current: "bg-green-50 border-green-500 text-green-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-green-500 bg-green-50 py-2 pl-3 pr-4 text-base font-medium text-green-700 font-inter"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"
                            >
                                Careers
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"
                            >
                                Roadmap
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"
                            >
                                Forum
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
