import React, {useCallback, useContext} from 'react';

import loginImg from '../assets/meme-cat.gif';

const Signin = ()=> {


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-primary p-8 px-8' >
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Email</label>
                    <input className='text-black rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' name="email" type="email" placeholder="Email" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Password</label>
                    <input className='text-black p-2 rounded-lg bg-white mt-2  focus:border-blue-500 focus:bg-gray-100 focus:outline-none' name="password" type="password" placeholder="Password" />
                </div>
                <div className='flex justify-between text-white py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-primary_300 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">SIGNIN</button>
                
            </form>
        </div>
    </div>
  )
};
export default (Signin);