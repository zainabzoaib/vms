import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme, useMediaQuery } from '@mui/material';

const columns = [
  { field: "record_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "purpose_of_visit", headerName: "Person to Visit", width: 130 },
  { field: "person_meeting", headerName: "Reason of Visit", width: 130 },
  { field: "entry_date", headerName: "Date / Time", width: 130 },
];
const ResponsiveDataGrid = ({ visitors, columns }) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const pageSize = isSmScreen ? 5 : 10;
}
const EntriesRecords = ({ entries }) => {
  const [visitors, setVisitors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/visitors")
      .then((response) => {
        setVisitors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching visitors:", error);
      });
  }, []);

  const fetchEntries = () => {
    // Make an API call to fetch entries for the selected date
    axios
      .get(`http://localhost:5000/api/entries?date=${selectedDate}`)
      .then((response) => setVisitors(response.data))
      .catch((error) => console.error("Error fetching entries:", error));
  };
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    fetchEntries();
  };
  return (
    <div className="w-full">
      <DataGrid className="bg-white"
        rows={visitors}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        getRowId={(row) => row.record_id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        options={{
          search: true,
          searchable: true,
          fixedHeader: true,
          selectableRows: false,
          displayRowCheckbox: false,
        }}
      />
    </div>
  );
};

export default EntriesRecords;
