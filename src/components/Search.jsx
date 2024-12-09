import Citysearch from "./searchcompo/Citysearch"
import FilterBar from "./searchcompo/FilterBar"
import Datepick from './searchcompo/Datepick'
const Search = () => {
  return (
    <div className="border-2 p-3  m-5 flex flex-col min-w-[200px]  ">
            <FilterBar/>
            <Citysearch/>
            <Datepick/>
            
    </div>
  )
}

export default Search