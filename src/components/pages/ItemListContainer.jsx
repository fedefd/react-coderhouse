
import { ProductCard } from "../common/ProductCard"

export const ItemListContainer = () => {

  return (
    <div>
      <h2>lista de productos</h2>

    <ProductCard titulo={"nike"} desc={"son las mejores"} precio={120} />
    <ProductCard titulo={"adidas"} desc={"son las casi mejores"} precio={150} />
    <ProductCard titulo={"puma"} desc={"son las mas o menos"} precio={170} />
    </div>
  )
}