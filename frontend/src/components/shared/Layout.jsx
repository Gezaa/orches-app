import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar isOpen={isOpen} />
            <div className={`flex flex-col flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="flex-1 p-4 bg-gray-100 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
