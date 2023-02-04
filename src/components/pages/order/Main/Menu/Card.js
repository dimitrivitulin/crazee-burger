import styled from "styled-components"
import { theme } from "../../../../../theme"

import PrimaryButton from "./../../../../reusable-ui/PrimaryButton"
export default function Card({ burger }) {
  return (
    <CardStyled key={burger.id}>
      <img src={burger.imageSource} alt={burger.title} />
      <h2>{burger.title}</h2>
      <div className="bottom-card">
        <h3>{burger.price}€</h3>
        <PrimaryButton label={"Ajouter"} />
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background-color: ${theme.colors.white};
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  overflow: hidden;
  box-sizing: content-box;
  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
    padding-top: 15px;
  }
  h2 {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .bottom-card {
    display: flex;
  }
`
