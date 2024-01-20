import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div className="bg-white p-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem label="Filter By Date">
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
