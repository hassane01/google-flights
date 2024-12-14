/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { ContextFlights } from '../../../Context/ContextApp';

const Typeflight = () => {
  const [isopen, setisopen] = useState(false);
  const {placeholder, setplaceholder} = useContext(ContextFlights)
  

  const handleselect = (option) => {
    setplaceholder(option);
    setisopen(false);
  };

  return (
    <div className=''>
      <div 
        className='flex items-center cursor-pointer' 
        onClick={() => setisopen((prev) => !prev)}
      >
        <div className='pr-3'>
          {placeholder === 'Round trip' ? (
            <FaArrowRightArrowLeft />
          ) : placeholder === 'One way tickets' ? (
            <IoArrowForwardOutline />
          ) : null}
        </div>
        <span className='hidden xs:block '>{placeholder}</span>
        {isopen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {isopen && (
        <div className='mt-2 bg-white border rounded shadow'>
          <div
            className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            onClick={() => handleselect('Round trip')}
          >
            Round trip
          </div>
          <div
            className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            onClick={() => handleselect('One way tickets')}
          >
            One way tickets
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Typeflight;
