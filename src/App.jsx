import UseFetch from "./components/common/UseFetch";
import { Count1, Count2 } from "./components/layouts";
import CountLayout from "./components/layouts/CountLayout/CountLayout";
import Navbar from "./components/layouts/Navbar";
import FetchingDataContainer from "./components/pages/fetchingData/FetchingDataContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Bookpolis, nuestra tienda online!" />
      <FetchingDataContainer />

      <CountLayout>
        <Count1 />
        <hr />
        <Count2 />
      </CountLayout>

      <UseFetch />
    </div>
  );
};

export default App;
