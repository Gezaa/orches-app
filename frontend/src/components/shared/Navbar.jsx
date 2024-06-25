import React from 'react';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ toggleSidebar }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <header className="bg-green-700 shadow-md w-full z-50 relative">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center space-x-4">
                    <button onClick={toggleSidebar} className="text-white hover:text-gray-300 transition-colors duration-200">
                        <AiOutlineMenu size={24} />
                    </button>
                    <Link to="/" className="text-2xl font-bold text-white">
                        Orchestration
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/profile" className="flex items-center text-white hover:text-gray-300 transition-colors duration-200">
                        <AiOutlineUser size={24} className="mr-2" />
                        Profile
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded active:scale-[.96] active:duration-75 transition-all hover:bg-red-600 hover:scale-[1.01] ease-in-out duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
