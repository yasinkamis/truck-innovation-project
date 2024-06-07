import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TruckList from './components/TrucksList';
import BoxList from './components/BoxesList';
import ProductList from './components/ProductsList';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/trucks" element={<TruckList />} />
        <Route path="/trucks/:truckId" element={<BoxList />} />
        <Route path="/trucks/:truckId/boxes/:boxId" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
