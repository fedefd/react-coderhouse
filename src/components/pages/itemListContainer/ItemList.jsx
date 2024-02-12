import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ItemList = ({ greeting, nombre, saludar, saludar2 }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {greeting}
        <p>hola {nombre}</p>
        <button onClick={saludar}>Saludar</button>
        <button onClick={saludar2}>Saludar2</button>
      </Typography>
    </Box>
  );
};

export default ItemList;

// presentacional - solo html (jsx)
