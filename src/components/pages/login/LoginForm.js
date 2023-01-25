import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { BsPersonCircle } from "react-icons/bs"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  // Comportement
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`order/${inputValue}`)
    setInputValue("")
  }

  // Affichage
  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <div className="form-box">
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <TextInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          Icon={<BsPersonCircle />}
          placeholder={"Entrez votre prénom"}
          required
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<MdOutlineKeyboardArrowRight />}
        />
      </div>
    </LoginFormWrapper>
  )
}

const LoginFormWrapper = styled.form`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 60vh;
  padding-top: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-family: "Amatic SC", cursive;
  .form-box {
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.spacing.md};
    h1 {
      padding: 1.5rem;
      display: block;
      width: 100%;
      text-align: center;
      font-size: ${theme.fonts.P4};
    }
    hr {
      width: 100%;
      border: 1px solid ${theme.colors.primary};
    }
    h2 {
      padding: ${theme.spacing.xxs};
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.light};
    }

    button {
    }
  }
`
