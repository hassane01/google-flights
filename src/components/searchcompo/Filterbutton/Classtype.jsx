import React, { useState } from 'react'
import { classname } from '../../../assets/selectdata'
const Classtype = () => {
    const [isopen , setopen ] = useState(false)
    const [currenttype , setcurrentype] = useState(classname[0].type)
    const handledata = (val)=>{
        setcurrentype(val)
        setopen((prev)=>!prev)
    }
  return (
    <div>
        <div onClick={()=>{setopen((prev)=>!prev)}}>{currenttype}</div>
        <div>
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