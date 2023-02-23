import { createContext } from "react"

export const OrderContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isTabSelected1: false,
  setIsTabSelected1: () => {},

  isTabSelected2: false,
  setIsTabSelected2: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},
})
