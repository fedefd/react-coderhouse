import Navbar from "./components/layouts/Navbar";
import FetchingDataContainer from "./components/pages/fetchingData/FetchingDataContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Bookpolis, nuestra tienda online!" />
      <FetchingDataContainer />
    </div>
  );
};

export default App;
