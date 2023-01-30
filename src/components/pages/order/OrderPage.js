import styled from "styled-components"
import Main from "./Main/Main"
import Navbar from "./Main/Navbar/Navbar"
import { useParams } from "react-router-dom"

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
  background: orange;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0;
  .container {
    max-width: 1400px;
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`
