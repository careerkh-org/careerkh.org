
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/careerkh_hr_text.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

const token = '1f3426922e233fe969712a6f46f57e588cab4bca4a5b8efdb6396734c1a58f83250be628158c2923248201b56958e2961006879888f03dbb3f0720e99d57dcbb7df84b57decd85afdcd349e0bc9c9d778c1b4d11d81da7227ebc625fbb8c308859aaf8eaa8b9b0bf11ea04d7996114f065dcaf251dad43dc0895cb39b61efa2d'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default function NavBar() {
    const [ enabled, setEnabled ] = useState(false);
    const { user } = UserAuth();
    const navigate = useNavigate();
    const [ value, setValue ] = useState([]);

    useEffect(() => {
        axios.get('https://careerkh-backend.up.railway.app/api/careers', config)
            .then(res => {
                console.log('NavBar')
                console.log(res.data.data)
                setValue(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <nav>
                        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 ">
                            {/* <p1>test: {careers.length}</p1> */}
                            <div className="flex h-16 sm:justify-center lg:justify-evenly max-sm:justify-center ">
                                <div className="flex px-2 lg:px-0 ">
                                    <div className="flex flex-shrink-0 items-center ">
                                        <NavLink to="/" >
                                            <img
                                                className="block h-20 w-auto lg:hidden"
                                                src={logo}
                                                alt="Company"
                                            />
                                            <img
                                                className="hidden h-20 w-auto lg:block"
                                                src={logo}
                                                alt="Company"
                                            />
                                        </NavLink>
                                    </div>

                                    <div className="hidden lg:ml-24 lg:flex items-center lg:space-x-10 justify-center pl-28">
                                        <NavLink
                                            to="/" className={({ isActive }) =>
                                                isActive ? 'inline-flex items-center border-b-2 border-primary  px-1 pt-1 text-sm font-medium text-black hover:border-gray-300 hover:text-primary_700 font-inter' : 'inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter'
                                            }
                                        >
                                            Home
                                        </NavLink>

                                        <NavLink
                                            to="/careers" className={({ isActive }) =>
                                                isActive ? 'inline-flex items-center border-b-2 border-primary  px-1 pt-1 text-sm font-medium text-black hover:border-gray-300 hover:text-primary_700 font-inter' : 'inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter'
                                            }
                                        >
                                            Careers
                                        </NavLink>


                                        <NavLink

                                            to="/roadmap" className={({ isActive }) =>
                                                isActive ? 'inline-flex items-center border-b-2 border-primary  px-1 pt-1 text-sm font-medium text-black hover:border-gray-300 hover:text-primary_700 font-inter' : 'inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter'
                                            }
                                        >
                                            Roadmap
                                        </NavLink>

                                        <NavLink

                                            to="/forum" className={({ isActive }) =>
                                                isActive ? 'inline-flex items-center border-b-2 border-primary  px-1 pt-1 text-sm font-medium text-black hover:border-gray-300 hover:text-primary_700 font-inter' : 'inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 font-inter'
                                            }
                                        >
                                            Forum
                                        </NavLink>







                                    </div>
                                    <SearchBar placeholder={"Search careers"} data={value} />
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:space-x-6">

                                        <NavLink to="/myaccount">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded border border-transparent bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-primary_700 focus:outline-none"
                                            >
                                                Account
                                            </button>
                                        </NavLink>
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
                            <NavLink to="/">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"
                                >
                                    Home
                                </Disclosure.Button>
                            </NavLink>

                            <NavLink to="/careers">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"

                                >
                                    Careers
                                </Disclosure.Button>
                            </NavLink>

                            <NavLink to="/roadmap">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"

                                >
                                    Roadmap
                                </Disclosure.Button>
                            </NavLink>
                            <NavLink to="/forum">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"
                                >
                                    Forum
                                </Disclosure.Button>
                            </NavLink>



                            <NavLink to="/myaccount">
                                <Disclosure.Button
                                    type="button"
                                    className="block border-l-4 rounded-md bg-primary border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-100 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 font-inter"
                                >
                                    Account
                                </Disclosure.Button>
                            </NavLink>

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
