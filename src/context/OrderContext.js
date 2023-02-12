import { useState } from "react"
import { createContext } from "react"

export const OrderContext = createContext()
export default function OrderContextProvider(props) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <OrderContext.Provider
      value={{ isAdmin, setIsAdmin, isCollapsed, setIsCollapsed }}
    >
      {props.children}
    </OrderContext.Provider>
  )
}
