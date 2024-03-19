const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <div>
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

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
