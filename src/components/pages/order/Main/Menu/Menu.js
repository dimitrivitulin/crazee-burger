import { fakeMenu2 } from "../../../../../fakeData/fakeMenu"
import Card from "./Card"
export default function Menu() {
  const burgers = fakeMenu2
  return (
    <div>
      {burgers.map((burger) => (
        <Card burger={burger} />
      ))}
    </div>
  )
}
