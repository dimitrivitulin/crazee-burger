import styled from "styled-components"

import Admin from "../Admin/Admin"
import Menu from "./Menu"

export default function RightMainSide() {
  return (
    <RightMainSideStyled>
      <Menu />
      <Admin />
    </RightMainSideStyled>
  )
}
const RightMainSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`
