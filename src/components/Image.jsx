import React from 'react'
import volimage from '../assets/volimg.png'
const Image = () => {
    return (
      <div className="relative  flex text-center justify-center">
        <img className="w-full" src={volimage} alt="Vols" />
        <p className=" text-[26px] md:text-[56px] absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold">
          Vols
        </p>
      </div>
    );
  };
  

export default Image