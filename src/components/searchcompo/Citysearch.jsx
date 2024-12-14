import  { useContext } from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ContextFlights from '../../Context/ContextApp';
import ButtonSearch from './ButtonSearch';

const Citysearch = () => {
  const {startRef , destinationRef , setStartcityname,setDestinationcityname } = useContext(ContextFlights)
  const Handledatasubmission = (event)=>{
    setStartcityname(startRef.current.value)
    setDestinationcityname(destinationRef.current.value)
    event.preventDefault()
  }
  return (
    <div className="flex  max-w-[100%] min-w-[100px] gap-2 my-3 md:mr-3">
  <input
  ref={startRef}
    className="flex-1 box-border min-w-[100px] p-2 border rounded"
    type="text"
    placeholder="the start"
   

  />
  <button className="p-2 bg-gray-200 rounded min-w-[20px]">
    <FaArrowRightArrowLeft />
  </button>
  <input
  ref={destinationRef}
    className="flex-1  min-w-[100px] p-2 border rounded"
    type="text"
    placeholder="Where are you going"
   
  />
  <ButtonSearch Submission={Handledatasubmission}/>
  
</div>

  )
}

export default Citysearch