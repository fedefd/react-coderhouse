import { Link } from "react-router-dom";

const Item = ({ id, name, img, description }) => {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <img src={img} alt="" />
        <p>{description}</p>
        <Link to={`/item/${id}`}>
          <button>Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
