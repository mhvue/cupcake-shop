import React from "react";
import NavBar from "./Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <NavBar /> 
      <p>Contact us with any questions.</p>
      <Box component="form" sx={{display: "flex", flexWrap: "wrap"}}>
        <div style={{ padding: "10px" }}>
          <TextField
            required
            id="outlined-required"
            label="First Name and Last Name"
            defaultValue="Name"
            sx={{ m: 1, width: '50ch' }}
          />

          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue="email"
            sx={{ m: 1, width: '50ch' }}
          />

          <TextField
           label="Comment"
           sx={{ m: 1, width: '100ch' }} 
            required
            multiline
            rows={4}
            id="Comment"
            defaultValue="Comment"
          />
          
        </div>
        <Button 
            style={{ marginLeft: "15px"}}
             variant="contained">Submit</Button>
      </Box>
    </div>
  );
};

export default Contact;
