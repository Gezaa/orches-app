// components/Monitoring.jsx
import React, { useState, useMemo } from 'react';
import { Table } from './shared/Table';
import ButtonPagination from './shared/ButtonPagination';
import AlertDialog from './shared/AlertDialog';
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import { AiOutlineRollback } from "react-icons/ai";

const generateData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    orderId: `73406855${index}`,
    milestones: index % 3 === 0 ? 'OrderOnProgress' : 'OrderCompleted',
    status: index % 3 === 0 ? 'Init' : 'Completed',
    lastUpdate: `2024-06-${25 + (index % 5)}`
  }));
};

export default function Monitoring() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');
  const itemsPerPage = 5;

  const headers = ['Order ID', 'Milestones', 'Status', 'Last Update', 'Actions'];
  
  const monitoringData = useMemo(() => generateData(50), []);

  const actions = [
    (data) => (
      <button 
        onClick={() => {
          setSelectedItem(data);
          setAlertType('retry');
          setIsAlertOpen(true);
        }}
        className="text-blue-600 hover:text-blue-900 flex items-center"
      >
        <MdOutlineReplayCircleFilled size={20} className="mr-1" />
      </button>
    ),
    (data) => (
      <button 
        onClick={() => {
          setSelectedItem(data);
          setAlertType('rollback');
          setIsAlertOpen(true);
        }}
        className="text-yellow-600 hover:text-yellow-900 flex items-center"
      >
        <AiOutlineRollback size={20} className="mr-1" />
      </button>
    ),
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

  const handleConfirm = () => {
    if (alertType === 'retry') {
      // Logic untuk retry
      console.log('Retrying for:', selectedItem);
    } else if (alertType === 'rollback') {
      // Logic untuk rollback
      console.log('Rolling back for:', selectedItem);
    }
    setSelectedItem(null);
  };

  return (
    <>
      <Table 
        title="Order Monitoring"
        headers={['Order ID', 'Milestones', 'Status', 'Last Update', 'Retry/Rollback']}
        data={currentItems} 
        actions={actions}
        linkPath="/monitoring-details"
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
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        title="Confirm Action"
        message={alertType === 'retry' ? "Are you sure you want to retry this order?" : "Are you sure you want to rollback this order?"}
        onConfirm={handleConfirm}
      />
    </>
  );
}