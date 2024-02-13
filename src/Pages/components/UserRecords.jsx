import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { ChevronLeft } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NewUser from "./NewUser";
import axios from "axios";

const UserTable = ({ onEdit, onDelete, onAdd, entries }) => {
  const [user, setUsers] = useState([]);
  const [isDiv1Visible, setDiv1Visibility] = useState(true);
  const [isDiv2Visible, setDiv2Visibility] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const showDiv1 = () => {
    setDiv1Visibility(true);
    setDiv2Visibility(false);
  };

  const showDiv2 = () => {
    setDiv1Visibility(false);
    setDiv2Visibility(true);
  };
  const handleEditClick = (userId) => {
    handleToggleColumns();
    updateTable(); 
  };
  const handleToggleColumns = () => {
    setShowAdditionalColumns((prevState) => !prevState);
  };

  const handleSaveClick = (userId) => {
    // Find the user being edited
    const editedUser = user.find((user) => user.user_id === userId);

    // Make API request to update the user in the database
    axios
      .put(`http://localhost:5000/api/users/${userId}`, editedUser)
      .then((response) => {
        console.log("User updated successfully", response.data);
        setEditMode(null);
        handleToggleColumns();
        updateTable(); // Exit edit mode
      })
      .catch((error) => console.error(error));
  };

  const handleCancelClick = () => {
    setEditMode(null);
    handleToggleColumns();
    updateTable(); 
  };

  const handleInputChange = (userId, columnName, value) => {
    // Update the local state to reflect the change immediately
    const updatedUsers = user.map((user) =>
      user.id === userId ? { ...user, [columnName]: value } : user
    );

    setUsers(updatedUsers);
  };
  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:5000/api/users/${userId}`)
      .then((response) => {
        console.log("User deleted successfully", response.data);
        updateTable();
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (

    <div className="w-full bg-white h-screen">
      {isDiv2Visible && (
        <div className="h-screen">
          <div
            className="flex md:justify-end md:px-10 p-2">
            <button
              className="flex items-center rounded-md bg-red my-5 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-margenta"
              onClick={showDiv1}
            >
              <ChevronLeft />
              <span className="ml-2">Go Back</span>
            </button>
          </div>
          <NewUser/>
        </div>
      )}
      {isDiv1Visible && (
        <div>
          <div
            className="flex md:justify-end justify-start p-0 md:px-10">
            <Button
              class="rounded-md bg-red my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-margenta"
              onClick={showDiv2}
            >
              ADD NEW USER
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
                    <TableCell>
                      <input
                        type="text"
                        value={user.username}
                        onChange={(e) =>
                          handleInputChange(user.id, "username", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="password"
                        value={user.password}
                        onChange={(e) =>
                          handleInputChange(user.id, "password", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        type="email"
                        value={user.email}
                        onChange={(e) =>
                          handleInputChange(user.id, "email", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {" "}
                      <input
                        type="text"
                        value={user.role}
                        onChange={(e) =>
                          handleInputChange(user.id, "role", e.target.value)
                        }
                      />
                    </TableCell>

                    <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          handleEditClick(user.user_id);
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="secondary"
                        onClick={() => handleDelete(user.user_id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    {showAdditionalColumns && (
                      <TableCell>
                        <button onClick={() => handleSaveClick(user.user_id)}>
                          Save / 
                        </button>
                        <button onClick={handleCancelClick}>Cancel</button>
                      </TableCell>
                    )}
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
