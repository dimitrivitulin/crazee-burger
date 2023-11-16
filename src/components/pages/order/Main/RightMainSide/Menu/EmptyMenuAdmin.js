import styled from "styled-components"
import { theme } from "../../../../../../theme"
import Button from "../../../../../reusable-ui/Button"

export default function EmptyMenuAdmin({ resetBurgers }) {
  return (
    <EmptyMenuAdminStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">
        Cliquez ci-dessous pour le réinitialiser.
      </span>
      <Button
        onClick={resetBurgers}
        label={"Générer de nouveaux produits."}
        version="normal"
      />
    </EmptyMenuAdminStyled>
  )
}
const EmptyMenuAdminStyled = styled.div`
  height: 100%;
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
    font-size: ${theme.fonts.size.XXXL};
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.size.XXXL};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
  }
`
