import styled from "styled-components"
import Main from "../../reusable-ui/Main/Main"
import Navbar from "../../reusable-ui/Navbar/Navbar"

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
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
    width: 1400px;
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`
