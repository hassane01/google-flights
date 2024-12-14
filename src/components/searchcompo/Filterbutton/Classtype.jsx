import React, { useContext, useState } from 'react'
import { classname } from '../../../assets/selectdata'
import ContextFlights  from '../../../Context/ContextApp'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
const Classtype = () => {
    const [isopen , setopen ] = useState(false)
    
    const {currenttype , setcurrentype } = useContext(ContextFlights)
    
    const handledata = (val)=>{
        setcurrentype(val)
        setopen((prev)=>!prev)
    }
  return (
    <div className=' items-center cursor-pointer'>
        <div>
        <div onClick={()=>{setopen((prev)=>!prev)}} className='cursor-pointer flex items-center'>{currenttype}
        <div className="pr-3 z-12">
          {isopen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        </div>
        {isopen &&
            classname.map((cls , idx)=>(
                <p onClick={()=>{handledata(cls.type)}} key={idx}>{cls.type}</p>
            ))
        }
        </div>
        
    </div>
  )
}

export default Classtype