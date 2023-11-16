export default function EmptyMenuAdmin({ resetBurgers }) {
  return (
    <div>
      <span>Pas de produit</span>
      <button onClick={resetBurgers}>Générer de nouveaux produits</button>
    </div>
  )
}
