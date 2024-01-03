import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const EntriesRecords = ({ entries }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Person to Meet</TableCell>
            <TableCell>Reason to Meet</TableCell>
            <TableCell>Date / Time</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.email}</TableCell>
              <TableCell>{entry.phone}</TableCell>
              <TableCell>{entry.personToMeet}</TableCell>
              <TableCell>{entry.reasonToMeet}</TableCell>
              <TableCell>{entry.dateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </Paper>
  );
};

export default EntriesRecords;
