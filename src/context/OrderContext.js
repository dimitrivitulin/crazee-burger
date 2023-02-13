import { useState } from "react"
import { createContext } from "react"

export const OrderContext = createContext()
export default function OrderContextProvider(props) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isTabSelected1, setIsTabSelected1] = useState(true)
  const [isTabSelected2, setIsTabSelected2] = useState(false)
  return (
    <OrderContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        isCollapsed,
        setIsCollapsed,
        isTabSelected1,
        setIsTabSelected1,
        isTabSelected2,
        setIsTabSelected2,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  )
}
