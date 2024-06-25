import React from 'react';
import { AiOutlineHome, AiOutlineSetting, AiOutlineMonitor } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {
    return (
        <>
            <div
                className={`h-full bg-green-700 w-64 transition-all duration-300 fixed top-0 ${
                    isOpen ? 'left-0' : '-left-64'
                } z-40`}
                id="sidebar"
            >
                {isOpen && (
                    <nav className="flex flex-col space-y-2 px-4 pt-20"> {/* Adjusted padding to push content down */}
                        <Link
                            to="/"
                            className="flex items-center text-white p-2 rounded hover:bg-gray-700 transition-colors duration-200"
                        >
                            <AiOutlineHome className="mr-2" size={20} />
                            Dashboard
                        </Link>
                        <hr className="my-4 border-white" />
                        <Link
                            to="/configuration"
                            className="flex items-center text-white p-2 rounded hover:bg-gray-700 transition-colors duration-200"
                        >
                            <AiOutlineSetting className="mr-2" size={20} />
                            Configuration
                        </Link>
                        <hr className="my-4 border-white" />
                        <Link
                            to="/monitoring"
                            className="flex items-center text-white p-2 rounded hover:bg-gray-700 transition-colors duration-200"
                        >
                            <AiOutlineMonitor className="mr-2" size={20} />
                            Monitoring
                        </Link>
                        <hr className="my-4 border-white" />
                    </nav>
                )}
            </div>
            {!isOpen && <div className="fixed top-0 left-0 h-full bg-green-700 w-16 z-40"></div>}
        </>
    );
}

export default Sidebar;
