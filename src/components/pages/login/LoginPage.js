import styled from "styled-components"
import Logo from "../../Logo"
import LoginForm from "./LoginForm"
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
  border: 1px solid orange;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: url(${burgerBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
