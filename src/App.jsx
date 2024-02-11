import Navbar from "./components/layouts/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"

const App = () => {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a Bookpolis, nuestra tienda Online!" />

    </div>
  )
}

export default App
