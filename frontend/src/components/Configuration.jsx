// components/Configuration.jsx
import React, { useState, useMemo } from 'react';
import { Table } from './shared/Table';
import ButtonPagination from './shared/ButtonPagination';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const generateConfigData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    sid: `EAICFS_${String(index).padStart(2, '0')}`,
    targetid: 'NOSS',
    version: '7',
    sourceProd: `T-N${index}${String.fromCharCode(65 + (index % 26))}${String.fromCharCode(65 + ((index + 1) % 26))}`,
    targetProd: index % 2 === 0 ? 'LI_Service_CFS' : 'Service_Desk_PS_CFS'
  }));
};

export default function Configuration() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 10;

  const headers = ['SID', 'TARGETID', 'VERSION', 'SOURCE PROD', 'TARGET PROD', 'Action'];
  
  const configData = useMemo(() => generateConfigData(100), []);

  const actions = [
    () => <button className="text-green-600 hover:text-green-900"><AiOutlineEdit size={20} /></button>,
    () => <button className="text-red-600 hover:text-red-900"><AiOutlineDelete size={20} /></button>
  ];

  const filteredData = useMemo(() => {
    return configData.filter(item =>
      Object.values(item).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [configData, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showAll ? filteredData : filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <Table 
        title="Configuration Administrator"
        headers={headers} 
        data={currentItems} 
        actions={actions}
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