import Navbar from "./components/layouts/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer"

const App = () => {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a Bookpolis, nuestra tienda online!" />

    </div>
  )
}

export default App
