// components/Configuration.jsx
import React, { useState, useEffect } from 'react';
import { Table } from './shared/Table';
import ButtonPagination from './shared/ButtonPagination';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';


const fetchConfigData = async () => {
  try {
    const response = await axios.get('http://localhost:8082/config');
    console.log('API response:', response.data);
    return response.data.data.map(item => ({
      process_name: item.process_name,
      transform_svc: item.transform_svc,
      exec_svc: item.exec_svc,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default function Configuration() {
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchConfigData();
      setMeals(data);
    };

    fetchData();
  }, []);

  const headers = ['process_name', 'transform_svc', 'exec_svc', 'Action'];

  const actions = [
    () => <button className="text-green-600 hover:text-green-900"><AiOutlineEdit size={20} /></button>,
    () => <button className="text-red-600 hover:text-red-900"><AiOutlineDelete size={20} /></button>
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showAll ? meals : meals.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(meals.length / itemsPerPage);

  return (
    <>
      <Table 
        title="Configuration Administrator"
        headers={headers} 
        data={currentItems} 
        actions={actions}
        searchTerm={''}  
        onSearchChange={() => {}}  
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
