import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NewUser from './NewUser';
import axios from 'axios';

const UserTable = ({ onEdit, onDelete, onAdd, entries }) => {
  const [user, setUsers] = useState([]);
  const [isDiv1Visible, setDiv1Visibility] = useState(true);
  const [isDiv2Visible, setDiv2Visibility] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const showDiv1 = () => {
    setDiv1Visibility(true);
    setDiv2Visibility(false);
  };

  const showDiv2 = () => {
    setDiv1Visibility(false);
    setDiv2Visibility(true);
  };
  
  return (
    <div>
  {isDiv2Visible && (<div>  <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}><Button color="primary" onClick={showDiv1}>
      Go back
    </Button></div> <NewUser /></div>)}
  {isDiv1Visible && (
  <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
    <Button color="primary" onClick={showDiv2}>
      Add New User
    </Button>
  </div>
    <Paper style={{ width: '100%', overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => onEdit(user.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => onDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
</div>
  )}
</div>
  );
};

export default UserTable;
