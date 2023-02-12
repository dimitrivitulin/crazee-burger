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
  height: 251px;
  background: #ffffff;
  border-top: 1px solid #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`
