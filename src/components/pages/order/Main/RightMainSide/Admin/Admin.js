import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"
import AdminPanel from "./AdminPanel"
import AdminTabs from "./AdminTabs"

export default function Admin() {
  const { isAdmin } = useContext(OrderContext)

  return (
    <AdminStyled>
      <AdminTabs />
      {isAdmin ? <AdminPanel /> : ""}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
