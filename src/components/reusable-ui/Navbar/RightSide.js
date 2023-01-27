import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function RightSide() {
  const { username } = useParams()
  return (
    <RightSideStyled>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  background: lightcoral;
`
