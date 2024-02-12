import ProductCard from "../../common/itemCount/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      {items.map(({ id, img, title, description, price }) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
