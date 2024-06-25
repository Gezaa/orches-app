import React from 'react';
import { AiOutlineHome, AiOutlineSetting, AiOutlineMonitor } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isOpen }) {
    const location = useLocation();

    const linkClass = (path) => `
        flex items-center text-white p-3 rounded-lg
        transition-all duration-300 ease-in-out
        ${location.pathname === path ? 'bg-green-600' : 'hover:bg-green-600'}
    `;

    const iconClass = "text-2xl min-w-[2rem] flex justify-center";

    return (
        <div
            className={`
                h-screen bg-green-700 transition-all duration-300 fixed top-0 left-0
                ${isOpen ? 'w-64' : 'w-20'}
                z-30 pt-16 shadow-lg
            `}
        >
            <nav className="flex flex-col space-y-2 px-3 pt-6">
                <Link to="/" className={linkClass('/')}>
                    <div className={iconClass}>
                        <AiOutlineHome />
                    </div>
                    {isOpen && <span className="font-medium ml-3">Dashboard</span>}
                </Link>
                <Link to="/configuration" className={linkClass('/configuration')}>
                    <div className={iconClass}>
                        <AiOutlineSetting />
                    </div>
                    {isOpen && <span className="font-medium ml-3">Configuration</span>}
                </Link>
                <Link to="/monitoring" className={linkClass('/monitoring')}>
                    <div className={iconClass}>
                        <AiOutlineMonitor />
                    </div>
                    {isOpen && <span className="font-medium ml-3">Monitoring</span>}
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;