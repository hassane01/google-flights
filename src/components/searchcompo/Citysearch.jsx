import React from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
const Citysearch = () => {
  return (
    <div className="flex  max-w-[100%]  gap-2">
  <input
    className="flex-1 box-border min-w-[100px] p-2 border rounded"
    type="text"
    placeholder="the start"
  />
  <button className="p-2 bg-gray-200 rounded min-w-[20px]">
    <FaArrowRightArrowLeft />
  </button>
  <input
    className="flex-1  min-w-[100px] p-2 border rounded"
    type="text"
    placeholder="Where are you going"
  />
</div>

  )
}

export default Citysearch