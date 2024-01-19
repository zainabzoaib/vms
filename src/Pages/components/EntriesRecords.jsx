import React, { useState, useEffect } from "react";
import axios from "axios";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableBody from "@mui/material/TableBody";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "record_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "purpose_of_visit", headerName: "Person to Visit", width: 130 },
  { field: "person_meeting", headerName: "Reason of Visit", width: 130 },
  { field: "entry_date", headerName: "Date / Time", width: 130 },
];

const EntriesRecords = ({ entries }) => {
  const [visitors, setVisitors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Default to today's date

  // const [nameFilter, setNameFilter] = useState('');
  // const [dateFilter, setDateFilter] = useState('');

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
    <div>
      {/* <label htmlFor="nameFilter">Filter By Name:</label>
    <input type="text" id="nameFilter" value={nameFilter} onChange={handleNameFilterChange} />

    <label htmlFor="dateFilter">Filter By Date:</label>
    <input type="date" id="dateFilter" value={dateFilter} onChange={handleDateFilterChange} /> */}
      {/* <label>Select Date: </label>
      <input type="date" value={selectedDate} onChange={handleDateChange} /> */}
      <DataGrid
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
      {/* <Paper style={{ width: "100%", overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Purpose of visit</TableCell>
              <TableCell>Reason to Meet</TableCell>
              <TableCell>Date / Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visitors.map((visitor) => (
              <TableRow key={visitor.id}>
                <TableCell>{visitor.name}</TableCell>
                <TableCell>{visitor.phone}</TableCell>
                <TableCell>{visitor.email}</TableCell>
                <TableCell>{visitor.purpose_of_visit}</TableCell>
                <TableCell>{visitor.person_meeting}</TableCell>
                <TableCell>{visitor.entry_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper> */}
    </div>
  );
};

export default EntriesRecords;
