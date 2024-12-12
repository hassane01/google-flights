import React, { useContext } from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ContextFlights from '../../Context/ContextApp';

const Citysearch = () => {
  const {setStartcity , setDestenitionCity } = useContext(ContextFlights)
  return (
    <div className="flex  max-w-[100%]  gap-2 my-3 md:mr-3">
  <input
    className="flex-1 box-border min-w-[100px] p-2 border rounded"
    type="text"
    placeholder="the start"
    onChange={(e)=>{setStartcity(e.target.value)}}

  />
  <button className="p-2 bg-gray-200 rounded min-w-[20px]">
    <FaArrowRightArrowLeft />
  </button>
  <input
    className="flex-1  min-w-[100px] p-2 border rounded"
    type="text"
    placeholder="Where are you going"
    onChange={(e)=>{setDestenitionCity(e.target.value)}}
  />
  
</div>

  )
}

export default Citysearch