import React from 'react';
import { AiOutlineFileAdd, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineSync, AiOutlineRollback, AiOutlineReload } from 'react-icons/ai';

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-green-700 text-white w-full px-6 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    {/* Add any additional navbar items here */}
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow bg-gray-100 px-8 py-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Summary</h1>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                    {/* Order Created */}
                    <div className="p-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-2">
                            <AiOutlineFileAdd size={24} className="mr-2" />
                            <h2 className="text-xl font-bold">Order Created</h2>
                        </div>
                        <p className="text-2xl font-bold">150</p> {/* Replace with dynamic data */}
                    </div>
                    {/* Order Success */}
                    <div className="p-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-2">
                            <AiOutlineCheckCircle size={24} className="mr-2" />
                            <h2 className="text-xl font-bold">Order Success</h2>
                        </div>
                        <p className="text-2xl font-bold">120</p> {/* Replace with dynamic data */}
                    </div>
                    {/* Order Failed */}
                    <div className="p-6 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-2">
                            <AiOutlineCloseCircle size={24} className="mr-2" />
                            <h2 className="text-xl font-bold">Order Failed</h2>
                        </div>
                        <p className="text-2xl font-bold">10</p> {/* Replace with dynamic data */}
                    </div>
                    {/* Order In Progress */}
                    <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-2">
                            <AiOutlineSync size={24} className="mr-2" />
                            <h2 className="text-xl font-bold">Order In Progress</h2>
                        </div>
                        <p className="text-2xl font-bold">30</p> {/* Replace with dynamic data */}
                    </div>
                    {/* Order Rollback */}
                    <div className="p-6 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-2">
                            <AiOutlineRollback size={24} className="mr-2" />
                            <h2 className="text-xl font-bold">Order Rollback</h2>
                        </div>
                        <p className="text-2xl font-bold">5</p> {/* Replace with dynamic data */}
                    </div>
                    {/* Order Retried */}
                    <div className="p-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center mb-2">
                            <AiOutlineReload size={24} className="mr-2" />
                            <h2 className="text-xl font-bold">Order Retried</h2>
                        </div>
                        <p className="text-2xl font-bold">15</p> {/* Replace with dynamic data */}
                    </div>
                </div>
            </div>
        </div>
    );
}
