// components/shared/ButtonPagination.jsx
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ButtonPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex justify-end items-center space-x-2 mt-4'>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-600 border border-gray-300 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white"
      >
        <AiOutlineLeft size={16} />
      </button>
      {[...Array(totalPages).keys()].map((number) => (
        <button
          key={number + 1}
          onClick={() => onPageChange(number + 1)}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${
            currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 border border-gray-300 hover:bg-blue-50'
          }`}
        >
          {number + 1}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-600 border border-gray-300 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white"
      >
        <AiOutlineRight size={16} />
      </button>
    </div>
  );
};

export default ButtonPagination;