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
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm}; ;
`
const LogoText = styled.h1`
  line-height: 0;
  font-size: ${theme.fonts.P6};
`
const ImgLogoWrapper = styled.span`
  height: 80%;
`
const ImgLogo = styled.img`
  height: 100%;
`
