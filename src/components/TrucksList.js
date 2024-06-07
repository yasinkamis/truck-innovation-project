import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { Button, Grid, Typography, Card, CardContent } from '@mui/material';
import { trucks } from '../data';

const TrucksList = () => {
  const downloadQRCode = (id) => {
    const canvas = document.querySelector(`canvas[aria-label='${id}']`);
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Grid container spacing={4} mt={4} padding={4}>
      {trucks.map((truck) => (
        <Grid item xs={12} sm={6} md={4} key={truck.id}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {truck.id}
              </Typography>
              <QRCode value={`https://truckprojectalara.vercel.app/trucks/${truck.id}`} aria-label={truck.id} />
            </CardContent>
            <Grid container justifyContent="center" alignItems="center" sx={{ paddingBottom: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => downloadQRCode(truck.id)}
                sx={{ mr: 1 }}
              >
                QR Kod İndir
              </Button>
              <Link to={`/trucks/${truck.id}`}>
                <Button variant="outlined">Detaylar</Button>
              </Link>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrucksList;
