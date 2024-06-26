import React from 'react'

const ButtonPagination= () => {
  return (
    <>

    <div className='flex justify-end bg-white '>

    
    <button className=" items-center text-slate-400 border border-gray-300 hover:bg-cyan-600 hover:text-white px-5 py-2 rounded-l-md transition-colors duration-200">
                        <span className="hidden md:inline">Previous</span>
                    </button>
                    <button className="flex justify-end border border-gray-300 bg-cyan-600 stroke-gray-300 items-center text-white hover:bg-cyan-600 px-3 py-2  transition-colors duration-200"
                    > 
                        <span className="hidden md:inline">1</span>
                    </button>
                    <button className="flex justify-end border border-gray-300 hover:text-white  stroke-gray-300 items-center text-slate-400 hover:bg-cyan-600 px-3 py-2  transition-colors duration-200"
                    >  
                        <span className="hidden md:inline">2</span>
                    </button>
                    <button className="flex justify-end border border-gray-300 hover:text-white  stroke-gray-300 items-center text-slate-400 hover:bg-cyan-600 px-5 py-2 rounded-r-md transition-colors duration-200"
                    >
                        <span className="hidden md:inline">Next</span>
                    </button>
                    </div>
    </>
    
  )
}

export default ButtonPagination