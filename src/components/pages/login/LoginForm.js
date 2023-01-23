import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { BsPersonCircle } from "react-icons/bs"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

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
        <h2>Connectez-vous</h2>
        <div className="input-box">
          <BsPersonCircle />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Entrez votre prénom..."
            required
          />
        </div>
        <button type="submit">
          Accédez à mon espace <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </LoginFormWrapper>
  )
}

const LoginFormWrapper = styled.form`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 60vh;
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  color: white;
  font-family: "Amatic SC", cursive;
  .form-box {
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    h1 {
      padding: 1.5rem;
      display: block;
      width: 100%;
      border-bottom: 2px solid ${theme.colors.redSecondary};
      text-align: center;
      font-size: ${theme.fonts.P4};
    }
    h2 {
      margin-top: 2rem;
      padding: 0.5rem;
    }
    .input-box {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      padding: 1rem 1.3rem;
      background-color: ${theme.colors.white};
      border-radius: 0.2rem;
      svg {
        color: ${theme.colors.greyLight};
        height: 100%;
      }
      input {
        width: 100%;
        border: none;
        border-radius: 0.2rem;
        background-color: ${theme.colors.white};
        font-family: "Open Sans", sans-serif;
      }
    }
    button {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 0.2rem;
      background-color: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
      font-family: "Open Sans", sans-serif;
      display: flex;
      justify-content: center;
      line-height: 1rem;
      font-weight: 600;
      letter-spacing: 1px;
      &:focus,
      &:hover {
        color: ${theme.colors.primary_burger};
        background-color: ${theme.colors.white};
        outline: 1px solid ${theme.colors.primary_burger};
      }
      svg {
        height: 100%;
        line-height: 1rem;
        margin-left: 0.2rem;
      }
    }
  }
`
