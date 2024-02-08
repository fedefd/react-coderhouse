import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ItemListContainer = ({ greeting }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {greeting}
      </Typography>
      {/* Aquí puedes añadir más contenido */}
    </Box>
  );
};

export default ItemListContainer;