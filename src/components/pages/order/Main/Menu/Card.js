import styled from "styled-components"
import { theme } from "../../../../../theme"

import PrimaryButton from "../../../../reusable-ui/PrimaryButton"
export default function Card({ id, imageSource, title, leftDescription }) {
  return (
    <CardStyled key={id}>
      <div className="image-card">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-card">
        <h2>{title}</h2>
        <div className="info-text">
          <h3>{leftDescription}</h3>
          <PrimaryButton label={"Ajouter"} className={"card-btn"} />
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background-color: ${theme.colors.white};
  padding: 50px ${theme.spacing.md} 10px ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.outside};

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
      font-size: ${theme.fonts.size.P4};
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
        padding: ${theme.spacing.sm} 0;
        span {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: ${theme.fonts.weights.bold};
          font-size: 11px;
        }
      }
    }
  }
`
