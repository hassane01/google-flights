import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import ContextFlights from '../../Context/ContextApp';

const ButtonSearch = () => {
  const { setSearch , flights} = useContext(ContextFlights)
  return (
    <div className=' absolute right-[42%] bottom-[-5%] '>
        <button onClick={()=>{setSearch(true)}} className='bg-[#1a73e9] flex items-center py-1 px-3 rounded-full text-white '>
        <IoSearch className='mr-2'/>
            Explore
            
        </button>
    </div>
  )
}

export default ButtonSearch