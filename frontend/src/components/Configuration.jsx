// Configuration.jsx
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export default function Configuration() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Data dummy untuk tabel
    const configData = [
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-NBMS', targetProd: 'LI_Service_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N1GOS', targetProd: 'Service_Desk_PS_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-NKM9', targetProd: 'MerraTerima_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N3X84', targetProd: 'VSAT_IP_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N3JTI', targetProd: 'VSAT_IP_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N3JU4', targetProd: 'VSAT_IP_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N3K82', targetProd: 'VSAT_IP_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N3K9C', targetProd: 'VSAT_IP_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N3K9Z', targetProd: 'VSAT_IP_CFS' },
        { sid: 'EAICFS_01', targetid: 'NOSS', version: '7', sourceProd: 'T-N1GBL', targetProd: 'Service_Desk_PS_CFS' },
        // ... tambahkan lebih banyak data jika diperlukan
    ];

    const filteredData = configData.filter(item =>
        Object.values(item).some(value =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Configuration Administrator</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['SID', 'TARGETID', 'VERSION', 'SOURCE PROD', 'TARGET PROD', 'Action'].map((header) => (
                                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.sid}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.targetid}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.version}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sourceProd}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.targetProd}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-green-600 hover:text-green-900 mr-3">
                                            <AiOutlineEdit size={20} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            <AiOutlineDelete size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Previous
                        </button>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, filteredData.length)}</span> of{' '}
                                <span className="font-medium">{filteredData.length}</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                {[...Array(pageCount).keys()].map((number) => (
                                    <button
                                        key={number + 1}
                                        onClick={() => handlePageChange(number + 1)}
                                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                            currentPage === number + 1
                                                ? 'z-10 bg-green-50 border-green-500 text-green-600'
                                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                        }`}
                                    >
                                        {number + 1}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}