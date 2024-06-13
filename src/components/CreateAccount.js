import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/phincon-logo.png'; // Adjust the path based on your actual logo file location

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleBackToLogin = () => {
        navigate('/');
    };

    const handleCreateAccount = () => {
        navigate('/dashboard');
    };

    return (
        <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray-200'>
            <div className='flex justify-center mb-6'>
                <img src={logo} alt='Logo' className='h-16' />
            </div>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details to create an account.</p>
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
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Confirm Password</label>
                    <div className='relative'>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1'
                            placeholder='Confirm your password'
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                        />
                        <button
                            type='button'
                            onClick={toggleConfirmPasswordVisibility}
                            className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400'
                        >
                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <div className='mt-8'>
                    <button 
                        className='w-full active:scale-[.96] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-gradient-to-tr from-blue-500 to-green-500 text-white text-lg font-bold'
                        onClick={handleCreateAccount}
                        >
                        Create your account
                    </button>
                </div>
                <div className='mt-4 flex justify-center'>
                    <button 
                        className='text-blue-400 text-base font-medium hover:scale-[1.05] ease-in-out' 
                        onClick={handleBackToLogin}
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}
