// components/Configuration.jsx
import React, { useState, useMemo } from 'react';
import { Table } from './shared/Table';
import ButtonPagination from './shared/ButtonPagination';
import PopupBox from './shared/PopupBox.jsx';
import AlertDialog from './shared/AlertDialog';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';

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
  const [editItem, setEditItem] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');
  const itemsPerPage = 10;

  const headers = ['SID', 'TARGETID', 'VERSION', 'SOURCE PROD', 'TARGET PROD', 'Action'];
  
  const configData = useMemo(() => generateConfigData(100), []);

  const actions = [
    (data) => (
      <button 
        onClick={() => {
          setEditItem(data);
          setIsPopupOpen(true);
        }} 
        className="text-blue-600 hover:text-blue-900"
      >
        <AiOutlineEdit size={20} />
      </button>
    ),
    (data) => (
      <button 
        onClick={() => {
          setEditItem(data);
          setAlertType('delete');
          setIsAlertOpen(true);
        }} 
        className="text-red-600 hover:text-red-900"
      >
        <AiOutlineDelete size={20} />
      </button>
    ),
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

  const handleSave = () => {
    setAlertType('save');
    setIsAlertOpen(true);
  };

  const handleConfirm = () => {
    if (alertType === 'save') {
      // Logic untuk menyimpan perubahan
      console.log('Saving changes for:', editItem);
    } else if (alertType === 'delete') {
      // Logic untuk menghapus item
      console.log('Deleting item:', editItem);
    }
    setIsPopupOpen(false);
    setEditItem(null);
  };

  const handleCreate = () => {
    setEditItem({
      sid: '',
      targetid: '',
      version: '',
      sourceProd: '',
      targetProd: ''
    });
    setIsCreating(true);
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>
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
      <PopupBox
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Edit Configuration"
      >
        {editItem && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">SID</label>
              <input 
                type="text" 
                value={editItem.sid} 
                onChange={(e) => setEditItem({...editItem, sid: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">TARGETID</label>
              <input 
                type="text" 
                value={editItem.targetid} 
                onChange={(e) => setEditItem({...editItem, targetid: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">VERSION</label>
              <input 
                type="text" 
                value={editItem.version} 
                onChange={(e) => setEditItem({...editItem, version: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">SOURCE PROD</label>
              <input 
                type="text" 
                value={editItem.sourceProd} 
                onChange={(e) => setEditItem({...editItem, sourceProd: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">TARGET PROD</label>
              <input 
                type="text" 
                value={editItem.targetProd} 
                onChange={(e) => setEditItem({...editItem, targetProd: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-150"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-150"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </PopupBox>
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        title="Confirm Action"
        message={alertType === 'save' ? "Are you sure you want to save these changes?" : "Are you sure you want to delete this item?"}
        onConfirm={handleConfirm}
      />
    </>
  );
}