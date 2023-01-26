import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "./../../reusable-ui/Logo"
import burgerBackground from "./../../../assets/images/F03-burger-background.jpg"

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
    background: url(${burgerBackground}), rgba(0, 0, 0, 0.7);
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
  }
`
