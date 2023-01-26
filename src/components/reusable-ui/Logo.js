import styled from "styled-components"
import { theme } from "../../theme"
import logo from "./../../assets/images/F03-logo-orange.png"

export default function Logo() {
  return (
    <LogoWrapper>
      <h1>crazee</h1>
      <img src={logo} alt="logo-crazee-burger" />
      <h1>burger</h1>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);
  h1 {
    display: inline;
    line-height: 1em;
    font-size: ${theme.fonts.P4};
    font-family: "Amatic SC", cursive;
    text-transform: uppercase;
    font-weight: ${theme.weights.bold};
    letter-spacing: 1.5px;
    color: ${theme.colors.primary};
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`
