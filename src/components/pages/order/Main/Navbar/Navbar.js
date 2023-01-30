import styled from "styled-components"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide/RightSide"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <LeftSide />
      <RightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  width: 100%;
  height: 10vh;
  background: #ffffff;
  border-radius: 15px 15px 0px 0px;
  padding: 0px 70px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
