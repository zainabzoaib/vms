import React, { useState } from "react";
import Logo from "./assests/Company.png";
import artwork from "./assests/artwork.png";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose_of_visit: "",
    person_meeting: "",
  });
  const navigate = useNavigate();

  const onImageClick=()=>{
    navigate("/");
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:5000/api/visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/success", { state: { formData: JSON.stringify(formData) } });
      })
      .catch((error) => {
        console.error("Error:", error);
       
      });
      
  };

  return (
    <section>
      <div className="md:column-1 bg-red md:items-center">
        <img className="mx-auto pt-4 w-64" src={Logo} alt="Logo" onClick={onImageClick} />;
      </div>
      {/* desktop view */}
      <div className="md:columns-2 hidden md:flex md:items-center h-screen">
        <div className="w-full bg-Light-orange md:items-center md:column-1 h-full flex">
          <div className="container py-4">
            <h1 className="text-3xl font-bold text-center text-text-red">
              VISITORS MANAGEMENT SYSTEM
            </h1>
            <p className="text-1xl font-medium text-center">
              Register here and book you slot today!
            </p>
            <img
              className="w-9/12 max-w-full mx-auto"
              src={artwork}
              alt="artwork"
            />
          </div>
        </div>
        <div className="w-full md:items-center md:column-1 h-full flex ">
          <div className="container py-4">
            <h1 className="text-3xl font-bold mb-8 text-text-red">
              REGISTRATION FORM
            </h1>
            <form onSubmit={handleSubmit} className="pr-10">
            <TextField
              label="Name"
              name="name"
              value={formData.name}
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
              inputProps={{
                pattern: '^[a-zA-Z ]+$', 
                sx: {
                  borderRadius: '15px',  
                  height: "15px",   
                  padding: '15px 12px',
                  borderColor: "grey",  
                  "&:hover": {
                    borderColor: "grey",  
                  },
                },
              }}
              />
             <TextField
              label="Phone Number (04XX XXX XXX)"
              name="phone"
              value={formData.phone}
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
              inputProps={{
                pattern: '[0-9]{4}[0-9]{3}[0-9]{3}',
                inputMode: 'numeric',
                  sx: {
                    borderRadius: '15px',  
                    height: '15px',  
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
                    },
                  },
                }}
              />
             <TextField
              label="Email"
              name="email"
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
              inputProps={{
                pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
                  sx: {
                    borderRadius: '15px',  
                    height: '15px',   
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
                    },
                  },
                }}
              />
             <TextField
              label="Name the person meeting"
              name="person_meeting"
              value={formData.person_meeting}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "light-grey",
                },
              }}
              inputProps={{
                pattern: '^[a-zA-Z ]+$', 
                  sx: {
                    borderRadius: '15px',  
                    height: '15px',   
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
                    },
                  },
                }}
              />
              <TextField
              label="Mention the reason to visit"
              name="purpose_of_visit"
              value={formData.purpose_of_visit}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "light-grey",
                },
              }}
              inputProps={{
                pattern: '^[a-zA-Z ]+$', 
                  sx: {
                    borderRadius: '15px',  
                    height: '60px',   
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
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
                  backgroundColor: "#f28e3c", 
                  "&:hover": {
                    backgroundColor: "#a12b63", 
                  },
                }}
              >
                SUBMIT
              </Button>
            </Grid>
            </form>
          </div>
        </div>
      </div>
      {/* small device view */}
      <div className="columns-1 block bg-Light-orange md:hidden items-center p-5">
        <div className="w-full">
        <h1 className="text-2xl font-bold text-center text-text-red">
              VISITORS MANAGEMENT SYSTEM
            </h1>
            <p className="text-1xl font-medium text-center">
              Manage your project and team in easy way
            </p>
          <div className="artwork-bg">
            <div className="container mx-auto overlay-bg z-10">
            <h1 className="text-xl font-bold mb-3 mt-10 text-text-red text-left">
              REGISTRATION FORM
            </h1>
            <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
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
              inputProps={{
                pattern: '^[a-zA-Z ]+$', 
                sx: {
                  borderRadius: '15px',  
                  height: "15px",   
                  width: '300px',
                  padding: '15px 12px',
                  borderColor: "grey",  
                  "&:hover": {
                    borderColor: "grey",  
                  },
                },
              }}
              />
             <TextField
              label="Phone Number (04XX XXX XXX)"
              name="phone"
              value={formData.phone}
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
              inputProps={{
                pattern: '[0-9]{4}[0-9]{3}[0-9]{3}',
                inputMode: 'numeric',
                  sx: {
                    borderRadius: '15px',  
                    height: '15px',   
                    width: '300px',
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
                    },
                  },
                }}
              />
             <TextField
              label="Email"
              name="email"
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
              inputProps={{
                pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
                  sx: {
                    borderRadius: '15px',  
                    height: '15px',   
                    width: '300px',
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
                    },
                  },
                }}
              />
             <TextField
              label="Name the person meeting"
              name="person_meeting"
              value={formData.person_meeting}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "light-grey",
                },
              }}
              inputProps={{
                pattern: '^[a-zA-Z ]+$', 
                  sx: {
                    borderRadius: '15px',  
                    height: '15px',   
                    width: '300px',
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
                    },
                  },
                }}
              />
              <TextField
              label="Mention the reason to visit"
              name="purpose_of_visit"
              value={formData.purpose_of_visit}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
              InputLabelProps={{
                sx: {
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "light-grey",
                },
              }}
              inputProps={{
                pattern: '^[a-zA-Z ]+$', 
                  sx: {
                    borderRadius: '15px',  
                    height: '60px',   
                    width: '300px',
                    padding: '15px 12px',
                    borderColor: "grey",  
                    "&:hover": {
                      borderColor: "grey",  
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
                  backgroundColor: "#f28e3c",
                  "&:hover": {
                    backgroundColor: "#a12b63",
                  },
                }}
              >
                SUBMIT
              </Button>
            </Grid>
            </form>
            </div>
          </div>
        </div>
      </div>

      <div className="md:column-2 bg-red items-center">
        <div className="text-white text-center py-4">
          <p> © Zainab & keerthika 2023. All right reserved</p>
        </div>
      </div>
    </section>
  );
};
export default RegistrationForm;
