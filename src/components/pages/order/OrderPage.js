import styled from "styled-components"
import Main from "./Main/Main"

import { useParams } from "react-router-dom"
import { theme } from "../../../theme"
import Navbar from "./Navbar/Navbar"
import { useState } from "react"
import { OrderContext } from "../../../context/OrderContext"

export default function OrderPage() {
  const { username } = useParams()
  const [isAdmin, setIsAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isTabSelected1, setIsTabSelected1] = useState(true)
  const [isTabSelected2, setIsTabSelected2] = useState(false)
  const OrderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    isTabSelected1,
    setIsTabSelected1,
    isTabSelected2,
    setIsTabSelected2,
  }

  return (
    <OrderContext.Provider value={OrderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
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
