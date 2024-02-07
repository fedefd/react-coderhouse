

export const ProductCard = ( {titulo, desc, precio} ) => {

  return (
    <div style={{border: "2px solid black"}}>
      <img src="" alt="" />
      <h4>{titulo}</h4>
      <h3>{desc}</h3>
      <h3>{precio}</h3>
    </div>
  )
}

/*export const ProductCard = ( props ) => {
  
  return (
    <div style={{border: "2px solid black"}}>
      <img src="" alt="" />
      <h4>{props.titulo}</h4>
      <h3>{props.desc}</h3>
      <h3>{props.precio}</h3>
    </div>
  )
}*/

/* 
export const ProductCard = ( props ) => {
  
      const {  titulo, desc, precio  } = props

  return (
    <div style={{border: "2px solid black"}}>
      <img src="" alt="" />
      <h4>{titulo}</h4>
      <h3>{desc}</h3>
      <h3>{precio}</h3>
    </div>
  )
}


*/
