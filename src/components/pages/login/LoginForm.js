import React, { useState } from "react"

export default function LoginForm() {
  // State
  const [prenom, setPrenom] = useState("")

  // Comportement
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${prenom}`)
    setPrenom("")
  }

  // Affichage
  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  )
}
