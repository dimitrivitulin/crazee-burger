import styled from "styled-components"
import Main from "./Main/Main"

import { theme } from "../../../theme"
import Navbar from "./Navbar/Navbar"
import { useState } from "react"
import { OrderContext } from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "./Main/RightMainSide/Admin/AdminPanel/AddForm"

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [burgers, setBurgers] = useState(fakeMenu.MEDIUM)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleAdd = (newProduct) => {
    const burgerCopy = [...burgers]

    const burgerUpdated = [newProduct, ...burgerCopy]

    setBurgers(burgerUpdated)
  }
  const resetBurgers = () => {
    setBurgers(fakeMenu.MEDIUM)
  }
  const handleDelete = (idOfProductToDelete) => {
    const burgersCopy = [...burgers]
    const burgersUpdated = burgersCopy.filter(
      (product) => product.id !== idOfProductToDelete
    )
    console.log("burgersUpdated", burgersUpdated)
    setBurgers(burgersUpdated)
  }

  const OrderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    handleAdd,
    burgers,
    resetBurgers,
    handleDelete,
    newProduct,
    setNewProduct,
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
