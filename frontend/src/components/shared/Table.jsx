import React from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

import { MdOutlineReplayCircleFilled } from "react-icons/md";
import { Link } from 'react-router-dom';
 
export function Table() {
    // const navigate = useNavigate();
    // const handleDetails = () => {
    //     navigate('/monitoring-details');
    // };
  return (
    <div className="my-3 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Order Monitoring</h2>
                        <button className="text-green-500 hover:text-green-600 font-semibold transition duration-150 ease-in-out">
                            View All
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Milestones</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Last Update</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Retry / Rollback</th>
                                </tr>
                            </thead>
                            <tbody className="text-center bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <Link  to="/monitoring-details" className="hover:text-cyan-600 " >       734068550</Link></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    OrderOnProgress
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                                            Init
                                        </span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="flex flex-wrap px-6 py-4 justify-evenly whitespace-nowrap text-sm font-medium">
                                    <a href="#"><MdOutlineReplayCircleFilled size={24}/></a>
                                    <a href="#"><RiDeleteBin2Fill size={22}/></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#" className="hover:text-cyan-600 " >       734068551</a></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    OrderCompleted
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="flex flex-wrap justify-evenly px-6 py-4 whitespace-nowrap text-sm font-medium inline">
                                        <a href="#"><MdOutlineReplayCircleFilled size={24}/></a>
                                        <a href="#"><RiDeleteBin2Fill size={22}/></a>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#" className="hover:text-cyan-600 " >       734068552</a></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    OrderCompleted
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="flex flex-wrap justify-evenly px-6 py-4 whitespace-nowrap text-sm font-medium inline">
                                        <a href="#"><MdOutlineReplayCircleFilled size={24}/></a>
                                        <a href="#"><RiDeleteBin2Fill size={22}/></a>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#" className="hover:text-cyan-600 " >       734068553</a></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    OrderCompleted
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="flex flex-wrap justify-evenly px-6 py-4 whitespace-nowrap text-sm font-medium inline">
                                        <a href="#"><MdOutlineReplayCircleFilled size={24}/></a>
                                        <a href="#"><RiDeleteBin2Fill size={22}/></a>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#" className="hover:text-cyan-600 " >       734068554</a></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    OrderCompleted
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="flex flex-wrap justify-evenly px-6 py-4 whitespace-nowrap text-sm font-medium inline">
                                        <a href="#"><MdOutlineReplayCircleFilled size={24}/></a>
                                        <a href="#"><RiDeleteBin2Fill size={22}/></a>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#" className="hover:text-cyan-600 " >       734068555</a></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    OrderCompleted
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-06-25</td>
                                    <td className="flex flex-wrap justify-evenly px-6 py-4 whitespace-nowrap text-sm font-medium inline">
                                        <a href="#"><MdOutlineReplayCircleFilled size={24}/></a>
                                        <a href="#"><RiDeleteBin2Fill size={22}/></a>
                                    
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
  );
}