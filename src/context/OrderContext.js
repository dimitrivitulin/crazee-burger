import { createContext } from "react"

export const OrderContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  burgers: [],
  resetBurgers: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
})
