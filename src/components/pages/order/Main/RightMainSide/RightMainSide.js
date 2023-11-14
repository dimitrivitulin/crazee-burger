import styled from "styled-components"
import Menu from "./Menu/Menu"
import { useContext } from "react"
import { OrderContext } from "../../../../../context/OrderContext"
import Admin from "./Admin/Admin"

export default function RightMainSide() {
  const { isAdmin } = useContext(OrderContext)

  return (
    <RightMainSideStyled>
      <Menu />
      {isAdmin && <Admin />}
    </RightMainSideStyled>
  )
}
const RightMainSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`
