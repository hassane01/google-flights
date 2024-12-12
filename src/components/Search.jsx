import { useContext } from "react"
import ButtonSearch from "./searchcompo/ButtonSearch"
import Citysearch from "./searchcompo/Citysearch"
import Datepicker from "./searchcompo/Datespicker/Datepicker"
import FilterBar from "./searchcompo/FilterBar"
import ContextFlights from "../Context/ContextApp"
import OneDatePicker from "./searchcompo/Datespicker/OneDatePicker"
const Search = () => {
  const {placeholder} = useContext(ContextFlights)
  return (
    <div className="border-2 p-3  m-5 flex flex-col min-w-[200px]  relative  ">
            <FilterBar/>
            <div className="md:flex pb-5">

            <Citysearch/>
            {placeholder === 'One way tickets' ? <OneDatePicker/> :<Datepicker/> }
            
            </div>
            <ButtonSearch/>
            
            
            
    </div>
  )
}

export default Search