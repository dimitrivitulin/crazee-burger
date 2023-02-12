import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"

export default function AdminPanel() {
  const { isTabSelected1 } = useContext(OrderContext)
  return (
    <AdminPanelStyled>
      {isTabSelected1 ? "Ajouter un produit" : "Modifier un produit"}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  background-color: yellow;
  height: 251px;
`
