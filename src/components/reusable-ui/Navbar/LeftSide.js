import styled from "styled-components"
import Logo from "./../Logo"

export default function LeftSide() {
  return (
    <LeftSideStyled>
      <Logo />
    </LeftSideStyled>
  )
}

const LeftSideStyled = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    transform: none;
  }
`
