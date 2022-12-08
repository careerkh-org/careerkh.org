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
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SelectSearch() {
    return (
        <div className="bg-primary" aria-labelledby="footer-heading">

            <div className="mx-auto max-w-7xl py-7 px-4 sm:px-6 lg:py-10 lg:px-8 ">

                <div className=" pt-4 lg:flex lg:items-center lg:justify-evenly xl:mt-0">

                    <div className="mt-42 sm:flex sm:max-w-md lg:mt-0">


                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Industry
                            </label>
                            <select
                                id="location"
                                name="location"
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                defaultValue="Canada"
                            >                                <option>Information Technology </option>

                                <option>Accounting</option>
                                <option>Administration</option>

                            </select>
                        </div>

                    </div>

                    <div className="mt-4 sm:flex sm:max-w-md lg:mt-0">


                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Position
                            </label>
                            <select
                                id="location"
                                name="location"
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                defaultValue="Canada"
                            >
                                <option>WEB</option>
                                <option>MOBILE</option>
                                <option>PC</option>
                            </select>
                        </div>

                    </div>

                    <div className="mt-4 sm:flex sm:max-w-md lg:mt-0">


                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                id="location"
                                name="location"
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                defaultValue="Canada"
                            >
                                <option>JR Developer</option>
                                <option>SR Developer</option>
                                <option>Intern Developer</option>
                            </select>
                        </div>

                    </div>

                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:space-x-6 pt-8">

                        <button
                            type="button"
                            className="inline-flex items-center text-xs font-medium text-grey-400 focus:outline-none focus:ring-offset-2 font-inter text-gray-200"
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
