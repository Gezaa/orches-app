// components/Monitoring.jsx
import React, { useState, useMemo } from 'react';
import { Table } from './shared/Table';
import ButtonPagination from './shared/ButtonPagination';
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";

// Data for monitoring table
const generateData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    orderId: `73406855${index}`,
    milestones: index % 3 === 0 ? 'OrderOnProgress' : 'OrderCompleted',
    status: index % 3 === 0 ? 'Init' : 'Completed',
    lastUpdate: `2024-06-${25 + (index % 5)}`
  }));
};

export default function Configuration() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 10;


  const headers = ['Order ID', 'Milestones', 'Status', 'Last Update', 'Actions'];
  
  const monitoringData = useMemo(() => generateData(50), []);

  const actions = [
    () => <button className="text-blue-600 hover:text-blue-900"><MdOutlineReplayCircleFilled size={20} /></button>,
    () => <button className="text-red-600 hover:text-red-900"><RiDeleteBin2Fill size={20} /></button>
  ];


  const filteredData = useMemo(() => {
    return monitoringData.filter(item =>
      Object.values(item).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [monitoringData, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showAll ? filteredData : filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <Table 
        title="Order Monitoring"
        headers={headers} 
        data={currentItems} 
        actions={actions}
        linkPath={'/src/components/MonitoringDetails.jsx'}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showAll={showAll}
        onToggleShowAll={() => setShowAll(!showAll)}
      />
      {!showAll && (
        <div className="mt-4">
          <ButtonPagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}