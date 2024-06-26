// Navbar.jsx
import React from 'react';
import { AiOutlineUser, AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ toggleSidebar, isOpen }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <header className="bg-green-700 z-50 fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center h-16 px-4">
                <div className="flex items-center">
                    <button 
                        onClick={toggleSidebar} 
                        className="text-white hover:bg-green-600 p-3 rounded-lg transition-colors duration-200 mr-4 mt-1"
                    >
                        <AiOutlineMenu size={24} />
                    </button>
                    <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-200">
                        Orchestration
                    </Link>
                </div>
                <div className="flex items-center space-x-2">
                    <Link 
                        to="/profile" 
                        className="flex items-center text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                        <AiOutlineUser size={20} className="mr-2" />
                        <span className="hidden md:inline">Profile</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                        <AiOutlineLogout size={20} className="mr-2" />
                        <span className="hidden md:inline">Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;