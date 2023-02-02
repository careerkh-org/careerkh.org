import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = '1f3426922e233fe969712a6f46f57e588cab4bca4a5b8efdb6396734c1a58f83250be628158c2923248201b56958e2961006879888f03dbb3f0720e99d57dcbb7df84b57decd85afdcd349e0bc9c9d778c1b4d11d81da7227ebc625fbb8c308859aaf8eaa8b9b0bf11ea04d7996114f065dcaf251dad43dc0895cb39b61efa2d'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default function Detail() {
    const [ careers, setCareers ] = useState([]);
    const { data } = careers;

    useEffect(() => {
        axios.get('https://careerkh-backend.up.railway.app/api/careers', config)
            .then(res => {
                console.log(res)
                setCareers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-14 ">
            <div className='box-border h-auto w-7/8 p-4 border-2 border-black rounded-lg' >
                <h1 className=' text-center text-2xl font-bold'>
                    ReactJS Developer
                </h1>

                <div className=' text-center pt-2 pb-5'>
                    Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                </div>

                <div className='border-collapse border border-black '></div>
                <h1 className='pt-5 font-bold text-2xl'>
                    Qualifications
                </h1>

                <p className=' pt-5 pl-5'>
                    Minimum Qualifications:
                </p>
                <li className=' pt-3 pl-10'>
                    Bachelor's degree or equivalent practical experience or Student at least 3th years of Bachelor’s degree.
                </li>
                <li className=' pt-3 pl-10'>
                    1 year experiance with JavaScript Framework or Library ( Reactjs & Redux )
                </li>
                <li className=' pt-3 pl-10'>
                    Good experaince with Styling ( CSS, Bootstap, Tailwind CSS, Material ui )
                </li>
                <li className=' pt-3 pl-10'>
                    Experaince with control version ( Git )
                </li>

                <p className=' pt-5 pl-5'>
                    Maximum Qualifications:
                </p>
                <li className=' pt-3 pl-10'>
                    Bachelor's degree or equivalent practical experience.
                </li>
                <li className=' pt-3 pl-10'>
                    1 year experiance with JavaScript Framework or Library ( Reactjs & Redux )
                </li>
                <li className=' pt-3 pl-10'>
                    Good experaince with Styling ( CSS, Bootstap, Tailwind CSS, Material ui )
                </li>
                <li className=' pt-3 pl-10'>
                    Good experaince with Styling ( CSS, Bootstap, Tailwind CSS, Material ui )
                </li>
                <li className=' pt-3 pl-10'>
                    Experaince with control version ( Git )
                </li>
                <li className=' pt-3 pl-10'>
                    Experaince with Hosting Service
                </li>
                <li className=' pt-3 pl-10'>
                    Knowledge with Docker
                </li>
                <li className=' pt-3 pl-10'>
                    Knowledge with API Intergated
                </li>
                <li className=' pt-3 pl-10 pb-5'>
                    Knowledge with Database
                </li>

                <div className='border-collapse border border-black '></div>
                <p className=' pt-5 font-bold text-2xl'>
                    Responsibilities
                </p>
                <li className=' pt-3 pl-10'>
                    Developing new user-facing features using React.js
                </li>
                <li className=' pt-3 pl-10'>
                    Building reusable components and front-end libraries for future use
                </li>
                <li className=' pt-3 pl-10'>
                    Translating designs and wireframes into high quality code
                </li>
                <li className=' pt-3 pl-10 pb-5'>
                    Optimizing components for maximum performance across a vast array of web-capable devices and browsers
                </li>
                <div className='border-collapse border border-black '></div>

                <p className=' pt-5 font-bold text-2xl'>
                    Skills
                </p>
                <li className=' pt-3 pl-10'>
                    Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
                </li>
                <li className=' pt-3 pl-10'>
                    Thorough understanding of React.js and its core principles
                </li>
                <li className=' pt-3 pl-10'>
                    Experience with popular React.js workflows (such as Flux or Redux)
                </li>
                <li className=' pt-3 pl-10'>
                    Familiarity with newer specifications of EcmaScript
                </li>
                <li className=' pt-3 pl-10'>
                    Experience with data structure libraries (e.g., Immutable.js)
                </li>
                <li className=' pt-3 pl-10'>
                    Knowledge of isomorphic React is a plus
                </li>
                <li className=' pt-3 pl-10'>
                    Familiarity with RESTful APIs
                </li>
                <li className=' pt-3 pl-10'>
                    Knowledge of modern authorization mechanisms, such as JSON Web Token
                </li>
                <li className=' pt-3 pl-10'>
                    Familiarity with modern front-end build pipelines and tools
                </li>
                <li className=' pt-3 pl-10'>
                    Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
                </li>
                <li className=' pt-3 pl-10'>
                    Ability to understand business requirements and translate them into technical requirements
                </li>
                <li className=' pt-3 pl-10'>
                    A knack for benchmarking and optimization
                </li>
                <li className=' pt-3 pl-10'>
                    Familiarity with code versioning tools such as "Git, SVN, and Mercurial"
                </li>
                <li className=' pt-3 pl-10 pb-5'>
                    Make sure to mention any other framework, libraries, or other technology relevant to your project
                </li>
                <div className='border-collapse border border-black '></div>

                <p className=' pt-5 font-bold text-2xl'>
                    Tips & Tricks
                </p>
                <li className=' pt-3 pl-10'>
                    Use React Hooks in Functional Components
                </li>
                <p className=' pl-[100px] pt-3'>
                    asasadafvjjjckbmkfjhhmbkbnkkkkkkkkkkkkkkkkkkkkkkkkkk
                </p>
                <li className=' pt-3 pl-10'>
                    Use The React Context API For Passing Props
                </li>
                <li className=' pt-3 pl-10'>
                    Styled-Components
                </li>
                <li className=' pt-3 pl-10'>
                    React Fragments
                </li>
                <li className=' pt-3 pl-10'>
                    USe Error Boundaries
                </li>
                <li className=' pt-3 pl-10 pb-5'>
                    React and Typescript
                </li>
                <div className='border-collapse border border-black '></div>

                <p className=' pt-5 font-bold text-2xl'>
                    About the Job
                </p>
                <p className=' text-justify pt-5 '>
                    Like Google's own ambitions, the work of a Software Engineer (SWE) goes way beyond just Search. SWE Managers have not only the technical expertise to take on
                    and provide technical leadership to major projects, but also manage a team of engineers. You not only optimize your own code but make sure engineers are able to
                    optimize theirs. As a SWE Manager you manage your project goals, contribute to product strategy and help develop your team. SWE teams work all across the company,
                    in areas such as information retrieval, artificial intelligence, natural language processing, distributed computing, large-scale system design, networking, security,
                    data compression, user interface design; the list goes on and is growing every day. Operating with scale and speed, our exceptional software engineers are just getting
                    started -- and as a manager, you guide the way.
                </p>
                <p className='pt-3 text-justify pb-5'>
                    Google Cloud accelerates organizations’ ability to digitally transform their business with the best infrastructure, platform, industry solutions and expertise. We deliver
                    enterprise-grade solutions that leverage Google’s cutting-edge technology – all on the cleanest cloud in the industry. Customers in more than 200 countries and territories
                    turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems.
                </p>
                <div className='border-collapse border border-black '></div>

                <div class=" grid grid-cols-2">
                    <p className=' pt-5 font-bold text-2xl'>
                        Roadmap
                    </p>

                    <div className='text-right '>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-[#7AC04E] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary_700 justify-center mt-6 w-auto"
                        >
                            Expand
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}