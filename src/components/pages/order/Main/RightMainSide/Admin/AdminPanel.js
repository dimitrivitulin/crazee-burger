import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"

export default function AdminPanel() {
  const { isTabSelected1 } = useContext(OrderContext)
  return (
    <AdminPanelStyled>
      {isTabSelected1 ? "Ajouter un produit" : "Modifier un produit"}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 251px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.outside};
`
