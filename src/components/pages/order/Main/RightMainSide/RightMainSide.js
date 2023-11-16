import styled from "styled-components"
import Menu from "./Menu/Menu"
import { useContext } from "react"
import { OrderContext } from "../../../../../context/OrderContext"
import Admin from "./Admin/Admin"
import { theme } from "../../../../../theme"

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
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.inside};
`
