import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex flex-col flex-1 p-4 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
                <Header />
                <div className='flex-1 p-4 bg-gray-100 overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
