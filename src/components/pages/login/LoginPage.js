import styled from "styled-components"
import Logo from "../../Logo"
import LoginForm from "./LoginForm"
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
  overflow: hidden;
  position: relative;
  background-color: ${theme.colors.dark};
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-image: url(${burgerBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`
