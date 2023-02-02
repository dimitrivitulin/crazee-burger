import { fakeMenu2 } from "../../../../../fakeData/fakeMenu"
export default function Products() {
  const products = fakeMenu2
  // const imgSrc = "./../../../../../assets"

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            {/* <img src={`${imgSrc}${product.imageSource}`} alt={product.title} /> */}
            <h2>{product.title}</h2>
            <h3>{product.price}€</h3>
          </div>
        )
      })}
    </div>
  )
}
