import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const EntriesRecords = ({ entries }) => {
  const [visitors, setVisitors] = useState([]);
  // const [nameFilter, setNameFilter] = useState('');
  // const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/visitors')
      .then((response) => {
        setVisitors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching visitors:', error);
      });
  }, []);
   // Fetch visitors based on the selected filters
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/api/visitors-filter?name=${nameFilter}&date=${dateFilter}`)
  //     .then((response) => {
  //       setVisitors(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching visitors:', error);
  //     });
  // }, [nameFilter, dateFilter]);

  // const handleNameFilterChange = (event) => {
  //   const newNameFilter = event.target.value;
  //   setNameFilter(newNameFilter);
  // };

  // const handleDateFilterChange = (event) => {
  //   const newDateFilter = event.target.value;
  //   setDateFilter(newDateFilter);
  // };

  return (
    <div>
    {/* <label htmlFor="nameFilter">Filter By Name:</label>
    <input type="text" id="nameFilter" value={nameFilter} onChange={handleNameFilterChange} />

    <label htmlFor="dateFilter">Filter By Date:</label>
    <input type="date" id="dateFilter" value={dateFilter} onChange={handleDateFilterChange} /> */}
    
    <Paper style={{ width: '100%', overflowX: 'auto' }}>
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
          {visitors.map((visitor)=> (
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
    </Paper>
    </div>
  );
};

export default EntriesRecords;
