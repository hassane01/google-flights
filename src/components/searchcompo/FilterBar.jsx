import Classtype from './Filterbutton/Classtype'
import Nbrpeople from './Filterbutton/Nbrpeople'
import Typeflight from './Filterbutton/Typeflight'

const FilterBar = () => {
  return (
    <div className='flex  min-w-[200px]  mb-5 '> 
        <Typeflight/>
        <Nbrpeople/>
        <Classtype/>
        
        </div>
  )
}

export default FilterBar