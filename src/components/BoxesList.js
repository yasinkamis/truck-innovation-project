import React from "react";
import { useParams, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { trucks } from "../data";

const BoxesList = () => {
  const { truckId } = useParams();
  const truck = trucks.find((t) => t.id === truckId);

  if (!truck) {
    return <Typography variant="body1">Tır bulunamadı!</Typography>;
  }

  const downloadQRCode = (id) => {
    setTimeout(() => {
      const canvas = document.querySelector(`canvas[aria-label='${id}']`);
      if (!canvas) {
        console.error("Canvas not found");
        return;
      }
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${id}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }, 100); // Adjust the delay as needed
  };

  return (
    <Box mt={4} padding={4}>
      <Typography variant="h6" gutterBottom>
        {truckId} Tırındaki Kutular
      </Typography>
      <Grid container spacing={4}>
        {truck.boxes.map((box) => (
          <Grid item xs={12} sm={6} md={4} key={box.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {box.id}
                </Typography>
                <QRCode
                  value={`https://truckprojectalara.vercel.app/trucks/${truck.id}/boxes/${box.id}`}
                  aria-label={box.id}
                />
              </CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ paddingBottom: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => downloadQRCode(box.id)}
                  sx={{ mr: 1 }}
                >
                  QR Kod İndir
                </Button>
                <Link to={`/trucks/${truck.id}/boxes/${box.id}`}>
                  <Button variant="outlined">Detaylar</Button>
                </Link>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BoxesList;
