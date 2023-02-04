import styled from "styled-components"

export default function Card({ burger }) {
  return (
    <CardStyled key={burger.id}>
      <img src={burger.imageSource} alt={burger.title} />
      <h2>{burger.title}</h2>
      <h3>{burger.price}€</h3>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background-color: blue;
  padding-top: 50px;
  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
  }
`
