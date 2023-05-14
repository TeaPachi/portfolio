import { Box, AppBar, Typography, Toolbar, Button } from '@mui/material';
import React from 'react';
import './Header.css';

const header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="AppBar">    
        <Toolbar>
          <Typography color="var(--text2)" variant="h3">Milena Zingerman</Typography>
          <nav className="nav-links">
            <a href="">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>
          <Button href="#contact" className="contact-me-btn">Contact me!</Button>
        </Toolbar>  
      </AppBar>
    </Box>
  )
}

export default header