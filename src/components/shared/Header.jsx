import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add any logout logic here (e.g., clearing tokens, calling an API, etc.)
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-md w-full">
        <div className="container mx-auto flex justify-end items-center py-4 px-6">
            <div className="flex items-center space-x-4">
            <Link to="/profile" className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-200">
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

export default Header;
