import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "./../../reusable-ui/Logo"

export default function LoginPage() {
  // Affichage
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
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
    background: url("./images/F03-burger-background.jpg"), rgba(0, 0, 0, 0.7);
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
  }
  .logo-login-page {
    transform: scale(2.5);
  }
`
