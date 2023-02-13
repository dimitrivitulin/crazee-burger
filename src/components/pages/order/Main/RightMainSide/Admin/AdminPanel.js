import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"
import { getTabsConfig } from "./getTabsConfig"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)
  const tabs = getTabsConfig(currentTabSelected)
  const tabSelected = tabs.find((tab) => tab.index === currentTabSelected)
  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 251px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.outside};
`
