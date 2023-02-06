import styled from "styled-components"
import Main from "./Main/Main"

import { useParams } from "react-router-dom"
import { theme } from "../../../theme"
import Navbar from "./Navbar/Navbar"

export default function OrderPage() {
  const { username } = useParams()

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  .container {
    width: 1400px;
    display: flex;
    flex-direction: column;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
