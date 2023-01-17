import React from 'react'
import { Link } from 'react-router-dom'
export default function Category() {
    return (
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recently Careers</h2>
              <Link
                to="/careers"
                >
              <a className="hidden text-sm font-semibold text-primary hover:text-black sm:block">
                Browse all Careers
                <span aria-hidden="true"> &rarr;</span>
              </a>
              </Link>
            </div>
    
            <div className="mt-6 grid grid-cols-1 gap-y-6 py-10 sm:py-10 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 drop-shadow-md">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/careerkh-web.appspot.com/o/images%2Fbg.jpg?alt=media&token=fa741f66-2770-4028-9bd9-3475478c0ec1"
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className="object-cover object-center group-hover:opacity-75 "
                />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                <div className="flex items-end p-6 bg-white">
                  <div>
                    <h3 className="font-semibold text-black">
                    <Link
                        to="/careersdetail"
                    >
                      <a>
                        <span className="absolute inset-0" />
                        Developer
                      </a>
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-black">
                    View More
                        <span aria-hidden="true"> &rarr;</span>
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full drop-shadow-md">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/careerkh-web.appspot.com/o/images%2Fbg1.jpg?alt=media&token=6c04b786-3b6c-4613-8905-261abf2c5ba6"
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                    <Link
                        to="/careersdetail"
                    >
                      <a>
                        <span className="absolute inset-0" />
                        Mobile Developer
                      </a>
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                    View More
                      <span aria-hidden="true"> &rarr;</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full drop-shadow-md">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/careerkh-web.appspot.com/o/images%2Fbg2.jpg?alt=media&token=480a4812-17c0-443c-a288-3bb804c1b546"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                    <Link
                        to="/careersdetail"
                    >
                      <a>
                        <span className="absolute inset-0" />
                        Network Engineer
                      </a>
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      View More
                      <span aria-hidden="true"> &rarr;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )
}
