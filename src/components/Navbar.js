import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Truck Project
        </Typography>
        <Link to="/trucks" style={{ color: 'white', marginRight: 20 }}>Tırlar</Link>
        <Link to="/boxes" style={{ color: 'white', marginRight: 20 }}>Kutular</Link>
        <Link to="/products" style={{ color: 'white' }}>Ürünler</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
