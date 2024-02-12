import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import Navbar from "./components/layouts/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Bookpolis, nuestra tienda Online!" />
      <ItemCountContainer stock={3} />
      <ItemCountContainer stock={5} />
      <ItemCountContainer stock={7} />
      <ItemCountContainer stock={9} />
    </div>
  );
};

export default App;
