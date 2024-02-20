const CountLayout = ({ children }) => {
  return (
    <div
      style={{ border: "1px solid black", padding: ".7rem", margin: ".5rem" }}
    >
      <h2>Contadores</h2>
      {children}
    </div>
  );
};

export default CountLayout;
