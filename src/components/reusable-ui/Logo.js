import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>crazee</h1>
      <img src="/images/F03-logo-orange.png" alt="logo-crazee-burger" />
      <h1>burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  h1 {
    display: inline;
    line-height: 1em;
    font-size: ${theme.fonts.size.XXXL};
    font-family: "Amatic SC", cursive;
    text-transform: uppercase;
    font-weight: ${theme.fonts.weights.bold};
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
