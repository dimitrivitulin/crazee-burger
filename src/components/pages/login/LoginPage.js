import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "./../../reusable-ui/Logo"
import burgerBackground from "./../../../assets/images/F03-burger-background.jpg"
import { theme } from "../../../theme"

export default function LoginPage() {
  // Affichage
  return (
    <LoginPageWrapper>
      <Logo />
      <LoginForm />
    </LoginPageWrapper>
  )
}

const LoginPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${burgerBackground}), ${theme.colors.greySemiDark};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
  }
`
