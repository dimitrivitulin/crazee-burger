import styled from "styled-components"
import { theme } from "../../../../theme"
import { refreshPage } from "../../../../utils/window"
import Logo from "../../../reusable-ui/Logo"
import RightSide from "./RightSide/RightSide"

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo onClick={refreshPage} className={"clicable"} />
      <RightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  width: 100%;
  height: 10vh;
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.greyLight};
  .clicable {
    cursor: pointer;
  }
`
