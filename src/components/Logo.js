import styled from "styled-components"
import { theme } from "../theme"
import logo from "./../assets/images/F03-logo-orange.png"

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoTitle>
        <LogoText>CRAZEE</LogoText>
        <ImgLogoWrapper>
          <ImgLogo src={logo} alt="" />
        </ImgLogoWrapper>
        <LogoText>BURGER</LogoText>
      </LogoTitle>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  position: relative;
  z-index: 2;
  font-family: "Amatic SC", cursive;
  font-weight: 700;
`
const LogoTitle = styled.div`
  color: ${theme.colors.primary_burger};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  transform: scale(2.5);
  padding: ${theme.spacing.md};
`
const LogoText = styled.h1`
  line-height: 0;
  font-size: ${theme.fonts.P4};
`
const ImgLogoWrapper = styled.span`
  width: 100px;
`
const ImgLogo = styled.img`
  width: 100%;
`
