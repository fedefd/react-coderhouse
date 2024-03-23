import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = ({ handleSubmit, handleChange, errors, orderId }) => {
  return (
    <div style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
      {orderId ? (
        <div>
          {" "}
          <h2>Gracias por tu compra, tu número de compra es: {orderId}</h2>
          <Button variant="outlined">
            {" "}
            <Link to="/products">Seguir comprando</Link>{" "}
          </Button>
        </div>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "15px",
          }}
        >
          <TextField
            label="Nombre y Apellido"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
            autoComplete="name"
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
            type="number"
            autoComplete="tel"
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            autoComplete="email"
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            name="password"
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          <TextField
            label="Confirmar contraseña"
            variant="outlined"
            name="confirmPassword"
            onChange={handleChange}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword}
          />
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              sx={{ width: 100 }}
            >
              Comprar
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default Checkout;
