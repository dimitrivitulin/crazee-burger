export default function Card({ burger }) {
  return (
    <div key={burger.id}>
      <img src={burger.imageSource} alt={burger.title} />
      <h2>{burger.title}</h2>
      <h3>{burger.price}€</h3>
    </div>
  )
}
