import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers/DateRangePicker";

const Datepick = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        localeText={{ start: "Check-in", end: "Check-out" }}
      />
    </LocalizationProvider>
  );
};

export default Datepick;
