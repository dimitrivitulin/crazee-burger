import React from "react"
import { theme } from "../../../../../../theme"
import styled from "styled-components"

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span className="title">Victime de notre succès ! :D</span>
      <span className="description">
        De nouvelles recettes sont en cours de préparation <br /> À très vite !
      </span>
    </EmptyMenuClientStyled>
  )
}

const EmptyMenuClientStyled = styled.div`
  height: 100%;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // permet de diminuer la largeur du bouton resetMenu

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.XXXL};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.XXXL};
    margin-top: 20px;
  }
`
