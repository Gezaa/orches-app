import React from 'react';

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-gray-800 text-white w-full px-6 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold">Dashboard</h1>
                    </div>
                    {/* Add any additional navbar items here */}
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow bg-gray-100 px-8 py-6">
                <h1 className="text-4xl font-bold text-gray-800">Products XYZ</h1>
                {/* Add your dashboard content here */}
            </div>
        </div>
    );
}
