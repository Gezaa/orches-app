import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
            <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} />
            <div className={`flex flex-col flex-1 ${isOpen ? 'ml-64' : 'ml-20'} mt-16 transition-all duration-300`}>
                <div className="flex-1 p-6 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}