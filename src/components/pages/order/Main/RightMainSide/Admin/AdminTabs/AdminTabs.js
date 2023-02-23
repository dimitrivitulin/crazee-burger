import { useContext } from "react"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { OrderContext } from "../../../../../../../context/OrderContext"
import { theme } from "../../../../../../../theme"
import Tab from "./Tab"
import { tabsConfig } from "../tabsConfig"

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
  const tabs = tabsConfig

  return (
    <AdminTabsStyled>
      <Tab
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "is-active" : ""}
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
      />

      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            text={tab.text}
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
  display: flex;
  gap: 1px;
  position: absolute;
  top: -42px;
  left: 5%;

  .is-active {
    background-color: ${theme.colors.background_dark};
    border-bottom: 2px solid ${theme.colors.background_dark};
    color: ${theme.colors.white};
    :hover {
      border-bottom: 2px solid ${theme.colors.background_dark};
    }
  }
`
