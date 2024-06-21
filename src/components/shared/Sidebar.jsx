import React from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineSetting, AiOutlineMonitor } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {!isOpen && (
        <div className="fixed top-0 left-0 w-16 h-full bg-gray-800 z-50 flex items-start justify-center">
          <button onClick={toggleSidebar} className="pt-4 mt-4 text-white">
            <AiOutlineMenu size={24} />
          </button>
        </div>
      )}
      <div
        className={`h-full bg-gray-800 w-64 overflow-y-auto transition-all duration-300 fixed top-0 ${isOpen ? 'left-0' : '-left-64'} z-40`}
        id="sidebar"
      >
        {isOpen && (
          <>
            <div className="flex items-center justify-between pl-1 pr-3 pt-4 pb-0 mb-8 border-b border-gray-700">
              <button onClick={toggleSidebar} className="p-2 m-2 ml-0 text-white">
                <AiOutlineMenu size={24} />
              </button>
              <div className="sidebar-brand mr-2 text-2xl font-bold text-white">Orchestration</div>
            </div>
            <nav className="flex flex-col space-y-2 px-4">
              <Link to="/" className="flex items-center text-white p-2 rounded hover:bg-gray-700 transition-colors duration-200">
                <AiOutlineHome className="mr-2" size={20} />
                Dashboard
              </Link>
              <hr className="my-4 border-gray-700" />
              <Link to="/configuration" className="flex items-center text-white p-2 rounded hover:bg-gray-700 transition-colors duration-200">
                <AiOutlineSetting className="mr-2" size={20} />
                Configuration
              </Link>
              <hr className="my-4 border-gray-700" />
              <Link to="/monitoring" className="flex items-center text-white p-2 rounded hover:bg-gray-700 transition-colors duration-200">
                <AiOutlineMonitor className="mr-2" size={20} />
                Monitoring
              </Link>
              <hr className="my-4 border-gray-700" />
            </nav>
          </>
        )}
      </div>
    </>
  );
}

export default Sidebar;
