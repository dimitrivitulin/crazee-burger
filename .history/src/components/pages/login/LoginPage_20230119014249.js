import { useState } from "react";

export default function LoginPage() {
  // State
  const [prenom, setPrenom] = useState("");

  // Comportement
  const handleSubmit = (event) => {
    event.preventDefault();

    if (prenom) {
      alert(`Bonjour ${prenom}`);
    }
    setPrenom("");
  };

  // Affichage
  return (
    <div>
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
    </div>
  );
}