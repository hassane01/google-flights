import React, { useState } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

// Custom styled container for the date range picker
const DateRangePickerStyled = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Datepicker = () => {
  // State to manage start and end dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (

    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePickerStyled>
        {/* Start Date Picker */}
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newDate) => setStartDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Box sx={{ mx: 2 }}>to</Box>
        {/* End Date Picker */}
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newDate) => setEndDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
      </DateRangePickerStyled>
    </LocalizationProvider>
    </>
  );
};

export default Datepicker;
