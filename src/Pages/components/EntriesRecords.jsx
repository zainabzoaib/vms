import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme, useMediaQuery } from "@mui/material";

// const ResponsiveDataGrid = ({ visitors, columns }) => {
//   const theme = useTheme();
//   const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const pageSize = isSmScreen ? 5 : 10;

// }
const EntriesRecords = ({ entries }) => {
  const [visitors, setVisitors] = useState([]);
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //const pageSize = isSmScreen ? 5 : 10;
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const columns = [
    { field: "record_id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: isSmScreen ? 150 : undefined,
      flex: isSmScreen ? undefined : 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: isSmScreen ? 150 : undefined,
      flex: isSmScreen ? undefined : 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: isSmScreen ? 150 : undefined,
      flex: isSmScreen ? undefined : 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    {
      field: "purpose_of_visit",
      headerName: "Person to Visit",
      width: isSmScreen ? 170 : undefined,
      flex: isSmScreen ? undefined : 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    {
      field: "person_meeting",
      headerName: "Reason of Visit",
      width: isSmScreen ? 170 : undefined,
      flex: isSmScreen ? undefined : 1,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal" }}>{params.value}</div>
      ),
    },
    {
      field: "entry_date",
      headerName: "Date / Time",
      width: isSmScreen ? 150 : undefined,
      flex: isSmScreen ? undefined : 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString();
      },
    },
  ];
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
    <div className="w-full h-screen" style={{ width: "100%" }}>
      <DataGrid
        className="bg-white"
        density="comfortable"
        rows={visitors}
        columns={columns}
        getRowHeight={(params) => {
          return Math.max("100%");
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        getRowId={(row) => row.record_id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
          sorting: {
            sortModel: [{ field: "record_id", sort: "desc" }],
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
