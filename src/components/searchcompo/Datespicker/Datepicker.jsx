import { useContext } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { ContextFlights } from "../../../Context/ContextApp";
import dayjs from "dayjs";

// Custom styled container for the date range picker
const DateRangePickerStyled = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Datepicker = () => {
  // State to manage start and end dates
  const { setStartdate, setArriveDate, startdate } = useContext(ContextFlights);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePickerStyled>
          {/* Start Date Picker */}
          <DatePicker
            label="Start Date"
            defaultValue={dayjs(startdate)}
            onChange={(newDate) => {
              setStartdate(newDate?.format("YYYY-MM-DD"));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box sx={{ mx: 2 }}>to</Box>
          {/* End Date Picker */}
          <DatePicker
            label="End Date"
            onChange={(newDate) => {
              setArriveDate(newDate?.format("YYYY-MM-DD"));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </DateRangePickerStyled>
      </LocalizationProvider>
    </>
  );
};

export default Datepicker;
