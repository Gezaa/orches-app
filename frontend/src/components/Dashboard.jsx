import React from 'react';
import { AiOutlineFileAdd, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineSync, AiOutlineBarChart, AiOutlineCalendar } from 'react-icons/ai';

export default function Dashboard() {
    const cards = [
        { title: 'Order Created', icon: AiOutlineFileAdd, value: 150, color: 'bg-blue-500' },
        { title: 'Order Success', icon: AiOutlineCheckCircle, value: 120, color: 'bg-green-500' },
        { title: 'Order Failed', icon: AiOutlineCloseCircle, value: 10, color: 'bg-red-500' },
        { title: 'Order In Progress', icon: AiOutlineSync, value: 30, color: 'bg-yellow-500' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <div className="flex space-x-4">
                        <button className="bg-white text-gray-600 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out flex items-center">
                            <AiOutlineCalendar className="mr-2" />
                            Today
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 transition duration-150 ease-in-out flex items-center">
                            <AiOutlineBarChart className="mr-2" />
                            Generate Report
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {cards.map((card, index) => (
                        <div key={index} className={`${card.color} rounded-lg shadow-md overflow-hidden`}>
                            <div className="p-6 text-white">
                                <div className="flex justify-between items-center mb-4">
                                    <card.icon size={24} />
                                    <span className="text-xs font-semibold bg-white bg-opacity-20 px-2 py-1 rounded-full">
                                        Last 24h
                                    </span>
                                </div>
                                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                                <p className="text-3xl font-bold">{card.value.toLocaleString()}</p>
                            </div>
                            <div className="bg-white bg-opacity-20 px-6 py-2">
                                <span className="text-sm text-white">View Details</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
                        <button className="text-green-500 hover:text-green-600 font-semibold transition duration-150 ease-in-out">
                            View All
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#12345</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#12346</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            In Progress
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Smith</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}