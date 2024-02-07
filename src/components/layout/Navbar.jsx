// 2 formas


/*export const Navbar = () => {


  return (
    <h1>Este es el navbar</h1>
  )
} */


import CartWidget from "../common/CartWidget";
const Navbar = () => {


  return (
    <div>
      <h3>logo</h3>
      <ul>
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default Navbar