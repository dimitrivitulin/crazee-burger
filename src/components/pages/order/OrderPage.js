import styled from "styled-components"
import Main from "./Main/Main"

import { theme } from "../../../theme"
import Navbar from "./Navbar/Navbar"
import { useState } from "react"
import { OrderContext } from "../../../context/OrderContext"

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  const OrderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  }

  return (
    <OrderContext.Provider value={OrderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
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
