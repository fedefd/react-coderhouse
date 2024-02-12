const ProductCard = ({ img, title, description, price }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
        marginRight: "1rem",
        padding: ".5rem",
      }}
    >
      <img
        src={img}
        alt=""
        style={{ width: "90px", height: "90px", margin: "0 auto" }}
      />
      <h4>{title}</h4>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductCard;
