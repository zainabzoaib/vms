import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const NewUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        // Optionally, update the UI or show a success message
        alert("User added successfully");

        // Clear the form data
        setFormData({
          username: "",
          password: "",
          email: "",
          role: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors as needed
      });
  };
  return (
    <section className="bg-white">
      {/* desktop view */}
      <div className="flex items-center">
        <div className="px-40 py-12 md:block hidden w-full">
          <h1 className="text-4xl">New User</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="User Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              fullWidth
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />

            <TextField
              label="Password"
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />

            <TextField
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$',
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />

            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  width: "18%",
                  borderRadius: "5px",
                  backgroundColor: "#f28e3c", // Normal background color
                  "&:hover": {
                    backgroundColor: "#a12b63", // Background color on hover
                  },
                }}
              >
                SUBMIT
              </Button>
            </Grid>
          </form>
        </div>
        {/* mobile form */}
        <div className="md:container p-8 md:hidden">
          <h1 className="text-4xl">New User</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="User Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  width: "300px",
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  width: "300px",
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />

            <TextField
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  width: "300px",
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />

            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "10px",
                  color: "light-grey",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "0.375rem", // Rounded corners
                  height: "40px", // Smaller height
                  width: "300px",
                  padding: "15px 0px",
                  borderColor: "grey", // Black border color
                  "&:hover": {
                    borderColor: "grey", // Change border color on hover if needed
                  },
                },
              }}
            />
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  width: "30%",
                  borderRadius: "5px",
                  backgroundColor: "#f28e3c", // Normal background color
                  "&:hover": {
                    backgroundColor: "#a12b63", // Background color on hover
                  },
                }}
              >
                SUBMIT
              </Button>
            </Grid>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewUser;
