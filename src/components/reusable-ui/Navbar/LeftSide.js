import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "./../Logo"

export default function LeftSide() {
  return (
    <LeftSideStyled>
      <Link to="#">
        <Logo />
      </Link>
    </LeftSideStyled>
  )
}

const LeftSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    div {
      transform: none;
    }
  }
`
