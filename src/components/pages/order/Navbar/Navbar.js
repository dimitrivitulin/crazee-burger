import styled from "styled-components"
import { theme } from "../../../../theme"
import { refreshPage } from "../../../../utils/window"
import Logo from "../../../reusable-ui/Logo"
import RightSide from "./RightSide/RightSide"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo onClick={refreshPage} className={"clicable"} />
      <RightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  width: 100%;
  height: 10vh;
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  padding: 0px 70px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .clicable {
    cursor: pointer;
  }
`
