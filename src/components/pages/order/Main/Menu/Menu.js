import { fakeMenu2 } from "../../../../../fakeData/fakeMenu"
export default function Menu() {
  const burgers = fakeMenu2

  return (
    <div>
      {burgers.map((burger) => {
        return (
          <div key={burger.id}>
            <img src={burger.imageSource} alt={burger.title} />
            <h2>{burger.title}</h2>
            <h3>{burger.price}€</h3>
          </div>
        )
      })}
    </div>
  )
}
