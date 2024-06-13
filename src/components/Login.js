import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/phincon-logo.png'; // Adjust the path based on your actual logo file location

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCreateAccount = () => {
        navigate('/create-account'); // Navigate to the Create Account page
    };

    const handleSignIn = () => {
        navigate('/dashboard');
    };

    return (
        <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-200'>
            <div className='flex justify-center mb-6'>
                <img src={logo} alt='Logo' className='h-16' /> {/* Adjust height as needed */}
            </div>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome, please enter your details!</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Username</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1'
                        placeholder='Enter your username'
                        required
                    />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <div className='relative'>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1'
                            placeholder='Enter your password'
                            type={showPassword ? 'text' : 'password'}
                            required
                        />
                        <button
                            type='button'
                            onClick={togglePasswordVisibility}
                            className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400'
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                        className='active:scale-[.96] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-gradient-to-tr from-blue-500 to-green-500 text-white text-lg font-bold'
                        onClick={handleSignIn}
                    >
                        Sign in
                    </button>
                    <button className='font-medium text-base text-blue-400 hover:scale-[1.05] ease-in-out'>Forgot password?</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <button 
                        className='text-blue-400 text-base font-medium ml-2 hover:scale-[1.05] ease-in-out' 
                        onClick={handleCreateAccount}
                    >
                        Create an account
                    </button>
                </div>
            </div>
        </div>
    );
}
