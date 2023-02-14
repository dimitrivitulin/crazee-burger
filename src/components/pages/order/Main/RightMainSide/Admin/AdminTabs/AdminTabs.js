import { useContext } from "react"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { OrderContext } from "../../../../../../../context/OrderContext"
import { theme } from "../../../../../../../theme"
import Tab from "./Tab"
import { getTabsConfig } from "../getTabsConfig"

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    setCurrentTabSelected,
    currentTabSelected,
  } = useContext(OrderContext)

  const selectedTab = (tabSelected) => {
    setIsCollapsed(true)
    setCurrentTabSelected(tabSelected)
  }
  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "" : "is-active"}
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        content=""
      />

      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            content={tab.content}
            Icon={tab.Icon}
            onClick={() => selectedTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
          />
        )
      })}
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  padding-left: 70px;
  display: flex;
  gap: 1px;
  position: relative;
  top: 1px;

  .is-active {
    background-color: ${theme.colors.background_dark};
    border-bottom: 2px solid ${theme.colors.background_dark};
    color: ${theme.colors.white};
    :hover {
      border-bottom: 2px solid ${theme.colors.background_dark};
    }
  }
`
