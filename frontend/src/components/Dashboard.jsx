import React, { useState, useEffect } from 'react';
import { AiOutlineFileAdd, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineSync, AiOutlineBarChart, AiOutlineCalendar } from 'react-icons/ai';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
    const [selectedCard, setSelectedCard] = useState('success');
    const [barChartData, setBarChartData] = useState(null);
    const [pieChartData, setPieChartData] = useState(null);

    const cards = [
        { id: 'created', title: 'Order Created', icon: AiOutlineFileAdd, value: 1200, color: 'bg-blue-500' },
        { id: 'success', title: 'Order Success', icon: AiOutlineCheckCircle, value: 1100, color: 'bg-green-500' },
        { id: 'failed', title: 'Order Failed', icon: AiOutlineCloseCircle, value: 30, color: 'bg-red-500' },
        { id: 'inprogress', title: 'Order In Progress', icon: AiOutlineSync, value: 70, color: 'bg-yellow-500' },
    ];
    
    const barData = {
        created: [835, 190, 70, 40, 20, 10, 35],
        success: [800, 150, 70, 40, 10, 0, 30],
        failed: [5, 20, 0, 0, 5, 0, 0],
        inprogress: [30, 20, 0, 0, 5, 10, 5],
    };

    useEffect(() => {
        setBarChartData({
            labels: ['New Registration', 'Change Package', 'Suspend', 'Resume', 'Blocking', 'Unblock', 'Terminate'],
            datasets: [
                {
                    label: 'Order Count',
                    data: barData[selectedCard],
                    backgroundColor: ['#3b82f6', '#22c55e', '#ef4444', '#eab308', '#8b5cf6', '#ec4899', '#f97316'],
                    borderColor: ['#2563eb', '#16a34a', '#dc2626', '#ca8a04', '#7c3aed', '#db2777', '#ea580c'],
                    borderWidth: 1,
                },
            ],
        });
    }, [selectedCard]);

    useEffect(() => {
        setPieChartData({
            labels: cards.filter(card => card.id !== 'created').map(card => card.title),
            datasets: [
                {
                    data: cards.filter(card => card.id !== 'created').map(card => card.value),
                    backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
                    hoverBackgroundColor: ['#16a34a', '#dc2626', '#ca8a04'],
                },
            ],
        });
    }, []);

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <div className="flex space-x-4">
                    <button className="bg-white text-gray-600 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out flex items-center">
                        <AiOutlineCalendar className="mr-2" />
                        Today
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 transition duration-150 ease-in-out flex items-center">
                        <AiOutlineBarChart className="mr-2" />
                        Generate Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <button
                        key={card.id}
                        className={`${card.color} rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${card.color.split('-')[1]}-400`}
                        onClick={() => setSelectedCard(card.id)}
                    >
                        <div className="p-6 text-white flex flex-col items-center justify-center h-full">
                            <card.icon size={24} className="mb-2" />
                            <p className="text-4xl font-bold mb-2">{card.value.toLocaleString()}</p>
                            <h2 className="text-sm font-semibold text-center">{card.title}</h2>
                            <span className="text-xs mt-2 bg-white bg-opacity-20 px-2 py-1 rounded-full">
                                Last 24h
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pieChartData && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Status</h2>
                        <div className="h-64">
                            <Pie data={pieChartData} options={pieOptions} />
                        </div>
                    </div>
                )}
                {barChartData && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            {cards.find((card) => card.id === selectedCard)?.title} Details
                        </h2>
                        <div className="h-64">
                            <Bar data={barChartData} options={barOptions} />
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
                    <button className="text-blue-500 hover:text-blue-600 font-semibold transition duration-150 ease-in-out">
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
    );
}