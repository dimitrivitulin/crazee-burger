import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"
import TextInput from "../../reusable-ui/TextInput"
import Button from "../../reusable-ui/Button"

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("Dim")
  const navigate = useNavigate()

  // Comportement
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`order/${inputValue}`)
    setInputValue("")
  }

  // Affichage
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        Icon={<BsPersonCircle />}
        placeholder={"Entrez votre prénom"}
        required
        className="input-login"
        version="normal"
      />
      <Button
        label="Accéder à mon espace"
        Icon={<IoChevronForward />}
        className="login-btn"
        version="normal"
      />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px ${theme.spacing.lg};
  color: white;
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.size.XXXXL};
    margin: 30px 50px;
  }
  hr {
    width: 100%;
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  h2 {
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.XXXL};
  }
  .input-login {
    margin: 18px 0;
  }

  .login-btn {
    width: 100%;
    padding: ${theme.spacing.md};
  }
`
