import React, {useState} from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import loginImg from '../assets/login.jpg';

const Signup = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { createUser } = UserAuth();
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await createUser(email, password);
          navigate('/myaccount')
        } catch (e) {
          setError(e.message);
          console.log(e.message);
        }
      };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-primary p-8 px-8' onSubmit={handleSubmit}>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Email</label>
                    <input className='text-black rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' 
                    name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Password</label>
                    <input className='text-black p-2 rounded-lg bg-white mt-2  focus:border-blue-500 focus:bg-gray-100 focus:outline-none' 
                    name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Retype Password</label>
                    <input className='text-black p-2 rounded-lg bg-white mt-2  focus:border-blue-500 focus:bg-gray-100 focus:outline-none' 
                    
                    name="password" type="password" placeholder="Password" />
                </div>
                <div className='flex justify-between text-white py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                </div>
                <button className='w-full my-5 py-2 bg-primary_300 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">SIGNUP</button>
                <a className='text-white'>Already have an Account? </a>
                <Link to="/Login" className='text-indigo-600'>Login</Link>
            </form>
        </div>
    </div>
  )
};
export default (Signup);