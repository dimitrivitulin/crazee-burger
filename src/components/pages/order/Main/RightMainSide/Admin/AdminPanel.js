import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"
import { getTabselected, tabsConfig } from "./tabsConfig"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)
  const tabs = tabsConfig

  const tabSelected = getTabselected(tabs, currentTabSelected)
  return <AdminPanelStyled>{tabSelected && tabSelected.text}</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  height: 251px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.outside};
`
