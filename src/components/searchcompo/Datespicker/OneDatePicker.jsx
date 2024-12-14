import  { useContext } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { ContextFlights } from '../../../Context/ContextApp';
import dayjs from 'dayjs';
const OneDatePicker = () => {
  const {setStartdate , startdate} = useContext(ContextFlights)
  return (
    <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" 
        defaultValue={dayjs(startdate)}
        onChange={(newDate) => {
          setStartdate( newDate?.format("YYYY-MM-DD"))}}
        renderInput={(params) => <TextField {...params} />}
        
      />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  )
}

export default OneDatePicker