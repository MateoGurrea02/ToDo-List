import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard( {titulo, estado} ) {
  return (
    <Card sx={{ minWidth: 800 }} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {titulo}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {estado}
        </Typography>
      </CardContent>
    </Card>
  );
}