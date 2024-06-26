import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showTopFade, setShowTopFade] = useState(false);
    const [showBottomFade, setShowBottomFade] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            const scrollContainer = event.target;
            const scrollTop = scrollContainer.scrollTop;
            const scrollHeight = scrollContainer.scrollHeight;
            const clientHeight = scrollContainer.clientHeight;

            setShowBackToTop(scrollTop > 300);
            setShowTopFade(scrollTop > 20);
            setShowBottomFade(scrollTop < scrollHeight - clientHeight - 20);
        };

        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollToTop = () => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-green-700">
            <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
            <Sidebar isOpen={isOpen} />
            <div className={`flex flex-col flex-1 ${isOpen ? 'ml-64' : 'ml-20'} mt-16 transition-all duration-300`}>
                <div className="flex-1 p-3 bg-green-700 relative">
                    <div className="absolute inset-6 top-0 left-0 bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
                        <div className="h-full overflow-auto scroll-container relative">
                            {showTopFade && (
                                <div className="sticky top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10"></div>
                            )}
                            <div className="p-6 relative">
                                <Outlet />
                            </div>
                            {showBottomFade && (
                                <div className="sticky bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10"></div>
                            )}
                        </div>
                    </div>
                    {showBackToTop && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 z-50"
                        >
                            <AiOutlineArrowUp size={24} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}