import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  )
}
