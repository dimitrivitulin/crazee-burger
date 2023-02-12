import { useState } from "react"
import { createContext } from "react"

export const OrderContext = createContext()
export default function OrderContextProvider(props) {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <OrderContext.Provider value={{ isAdmin, setIsAdmin }}>
      {props.children}
    </OrderContext.Provider>
  )
}
