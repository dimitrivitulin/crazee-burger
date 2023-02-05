import styled from "styled-components"
import { theme } from "../../../../../theme"
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../../utils/maths"

import PrimaryButton from "../../../../reusable-ui/PrimaryButton"
export default function Burger({ id, imageSource, title, price }) {
  return (
    <BurgerStyled key={id}>
      <div className="image-card">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-card">
        <h2>{title}</h2>
        <div className="info-text">
          <h3>{formatPrice(replaceFrenchCommaWithDot(price))}</h3>
          <PrimaryButton label={"Ajouter"} className={"card-btn"} />
        </div>
      </div>
    </BurgerStyled>
  )
}

const BurgerStyled = styled.div`
  background-color: ${theme.colors.white};
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .image-card {
    width: 200px;
    height: 145px;
    padding-top: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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
    .info-text {
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
