import styled from "styled-components"
import { theme } from "../../theme"
import Button from "./Button"
import { TiDelete } from "react-icons/ti"

export default function Card({
  id,
  imageSource,
  title,
  leftDescription,
  hasDeleteButton,
  onDelete,
}) {
  return (
    <CardStyled key={id}>
      {hasDeleteButton && (
        <button
          className="delete-button"
          aria-label="delete-button"
          onClick={onDelete}
        >
          <TiDelete className="icon" />
        </button>
      )}
      <div className="image-card">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-card">
        <h2>{title}</h2>
        <div className="info-text">
          <h3>{leftDescription}</h3>
          <Button className={"card-btn"} version="normal" label="Ajouter" />
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.md} ${theme.spacing.md} 10px ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.outsideXl};
  position: relative;

  .delete-button {
    border: 1px solid red;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    padding: 0;
    border: none;
    background: none;
    &:hover {
      color: #ff0000;
    }
    .icon {
      width: 100%;
      height: 100%;
    }
  }
  .image-card {
    width: 200px;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 145px;
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
      font-size: ${theme.fonts.size.XXXL};
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
