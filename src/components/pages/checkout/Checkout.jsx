import { Box, Button, TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "15px",
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
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

      {/*    <div>
      <h1>checkout</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          name="name"
          type="text"
          placeholder="ingresa tu nombre"
          onChange={capturar} 
        />
        <input
          name="lastName"
          type="text"
          placeholder="ingresa tu apellido"
          onChange={capturar}
        />
        <input
          name="email"
          type="text"
          placeholder="ingresa tu mail"
          onChange={capturar}
        />

        <button type="submit">Comprar</button>
      </form>
    </div> */}
    </div>
  );
};

export default Checkout;
