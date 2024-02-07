import "./Navbar.css"

import patitos from "./images/patitos.jpg"

export const Navbar = () => {

  return (
    <nav>
      {/* {<img src={patitos} />} */}
      <img src="https://res.cloudinary.com/dewk7hnnv/image/upload/v1707328695/patitos_d8znek.jpg" alt="" />
      <ul>
        <li>productos</li>
        <li>servicios</li>
        <li>contacto</li>
      </ul>
    </nav>
  )
}