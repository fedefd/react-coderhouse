import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ItemListContainer from './ItemListContainer';


const ItemList = ({greeting, nombre, saludar}) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      {greeting}
      <p>hola {nombre}</p>
      <button onClick={saludar}>Saludar</button>
    </Typography>
  </Box>
  )
}

export default ItemList


// presentacional - solo html (jsx)