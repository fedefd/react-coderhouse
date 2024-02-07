

import DarkModeWidget from "./components/common/DarkModeWidget"
import Counter from "./components/common/Counter"
import Navbar from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"

const App = () => {

  return (
    <div>
      <DarkModeWidget />
      <Navbar />
      <ItemListContainer />
      <Counter />
    </div>
  )
}

export default App
