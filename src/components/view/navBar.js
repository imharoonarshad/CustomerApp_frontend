import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react'



export default function NavBar() {
  const navigate = useNavigate();

  const signin = () => {
    localStorage.setItem('login', true)
    
  }
  useEffect(() => {
    let signin = localStorage.getItem('login')
    if (signin) {
      navigate("/")

    }
  },[])

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CUSTOMER COMPLAINTS SYSTEM
          </Typography>

          <Link to="/form">


            <Button
              sx={{ marginRight: "15px", display: "inline-block", textdecoration: "none", borderBottom: "none" }}
              variant="contained"
              onClick={signin}
              color="success">
              Add Complaints
            </Button>
          </Link>
          <Link to='/login'>
            <Button
              sx={{ display: "inline-block", textdecoration: "none", borderBottom: "none" }}
              variant="contained"
              color="success"
              >
              Login
            </Button>
          </Link>



        </Toolbar>
      </AppBar>
    </Box>
  );
}
