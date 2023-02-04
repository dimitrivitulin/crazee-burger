import styled from "styled-components"
import { theme } from "../../../../../theme"
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../../utils/maths"

import PrimaryButton from "./../../../../reusable-ui/PrimaryButton"
export default function Card({ burger }) {
  return (
    <CardStyled key={burger.id}>
      <img src={burger.imageSource} alt={burger.title} />
      <div className="info-card">
        <h2>{burger.title}</h2>
        <div className="bottom-info-card">
          <h3>{formatPrice(replaceFrenchCommaWithDot(burger.price))}</h3>
          <PrimaryButton label={"Ajouter"} className={"card-btn"} />
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background-color: ${theme.colors.white};
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
    padding-top: 15px;
  }

  .info-card {
    width: 200px;
    height: 110px;
    display: flex;
    flex-direction: column;
    padding: 5px;
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
    .bottom-info-card {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-family: "Open Sans";
        font-weight: ${theme.fonts.weights.regular};
        font-size: 16px;
        line-height: 22px;
        color: ${theme.colors.primary};
      }
      .card-btn {
        width: 50%;
        padding: 12px 0;
        span {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 700;
          font-size: 11px;
        }
      }
    }
  }
`
