import { useState } from "react";

export default function LoginPage() {
  
  // State
  const [prenom, setPrenom] = useState("");

// Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(prenom){
      alert(`Bonjour ${prenom}`);
    }
    setPrenom("")
  };

  // Affichage
  return (
     <div className="App">
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h3>Connectez-vous</h3>
      <form onSubmit={handleSubmit}>
        <input 
          value={prenom} 
          onChange={(e) => setPrenom(e.target.value)}
          type="text" placeholder="Entrez votre prénom..." 
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  )
}
