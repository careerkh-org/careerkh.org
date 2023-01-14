
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { object } from 'prop-types';

const token = '7184cdcc318b099cf5c37e08014d29cfa662264dbb7ded22db66652abb778b3368b9f17526fd0e9608ef44fcc3a52ef1f4308b1caf69780975c766d2f78b07b4e86f8be063ca4327fff16c347e40e402c43d624cf1d9481a702c48d700fdb507077f45b91be32508226e13c63374ee49e877caf67c743ef2fcc41309adaf9194'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            careers: [],
            industries: [],
            locations: [],
            startCounter: false
        };
    }

    componentDidMount() {
        let endpoints = [
            'https://careerkh-api.up.railway.app/api/careers?populate=locations&populate=industries',
            'https://careerkh-api.up.railway.app/api/industries',
            'https://careerkh-api.up.railway.app/api/locations',
        ];

        axios.all(endpoints.map((endpoint) => axios.get(endpoint, config))).then(
            axios.spread(({ data: careers }, { data: industries }, { data: locations }) => {
                this.setState({ careers: careers.data })
                this.setState({ industries: industries.data })
                this.setState({ locations: locations.data })

                console.log("Hero")
                console.log({ careers, industries, locations });
            })
        );



    }


    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ startCounter: true });
        }
    }



    render() {

        return (
            <div className="relative overflow-hidden h-screen" >
                <main>

                    <div className=" pt-2 sm:pt-2 lg:overflow-auto lg:pt-24 lg:pb-1 md:pt-1 ">
                        <div className="mx-auto mt-3  max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8 ">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                    <div className="lg:py-8">
                                        <a
                                            href="#"
                                            className="inline-flex items-center rounded-full bg-secondary p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                                        >
                                            <span className="rounded-full bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white font-inter">
                                                WE'RE WORKING
                                            </span>
                                            <span className="ml-4 text-sm font-inter">Visit our contact page</span>
                                            <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                        </a>
                                        <h1 className="mt-4 pt-4 text-4xl tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl font-righteous">
                                            <span className="block text-primary">Career Description</span>
                                            <span className="block ml-40">in Cambodia</span>
                                        </h1>
                                        <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter font-regular">
                                            We provide the information about career in cambodia.
                                            Over 100 career around the country. Find your best career
                                            to work in Careerkh.
                                        </p>
                                        <div className="mt-10 sm:mt-12">
                                            <div action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                                                <div className="lg:flex">
                                                    <div className="mt-0 sm:mt-0 sm:ml-0">
                                                        <button

                                                            className="block w-full rounded-md bg-primary py-3 px-4 font-medium text-white shadow hover:bg-primary_700  "
                                                        >
                                                            Explore
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="sm:flex justify-between mt-10">
                                                    <div className="">
                                                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                            <span className="block text-primary sm:flex justify-center font-righteous">
                                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? this.state.industries.length : 0} /></VisibilitySensor>
                                                            </span>
                                                        </h1>
                                                        <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                                                            Industries
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                            <span className="block text-primary sm:flex justify-center font-righteous">
                                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? this.state.careers.length : 0} /></VisibilitySensor>
                                                            </span>
                                                        </h1>
                                                        <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                                                            Carrers
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                            <span className="block text-primary sm:flex justify-center font-righteous">
                                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? 3 : 0} /></VisibilitySensor>

                                                            </span>
                                                        </h1>
                                                        <p className="mt-3 text-base text-black-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                                                            Roadmap
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12  lg:relative lg:m-0">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 ">
                                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                        <img
                                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-100 lg:max-w-none"
                                            src="https://firebasestorage.googleapis.com/v0/b/careerkh-web.appspot.com/o/images%2Fhero.svg?alt=media&token=58cce72d-377f-4a16-9710-ef374a5f3d9b"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        )
    }
}