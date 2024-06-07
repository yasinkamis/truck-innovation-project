import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography,ListItem, ListItemText, Box,  Grid } from '@mui/material';
import { trucks } from '../data';

const ProductsList = () => {
  const { truckId, boxId } = useParams();
  const truck = trucks.find((t) => t.id === truckId);

  if (!truck) {
    return <Typography variant="body1">Tır bulunamadı!</Typography>;
  }

  const box = truck.boxes.find((b) => b.id === boxId);

  if (!box) {
    return <Typography variant="body1">Kutu bulunamadı!</Typography>;
  }

  return (
    <Box padding={4}>
      <Typography variant="h6" gutterBottom>
        {box.id} Kutusundaki Ürünler
      </Typography>
      <Grid container spacing={2}>
        {box.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
            <ListItem>
              <ListItemText primary={product.name} secondary={`Adet: ${product.quantity}`} />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsList;
