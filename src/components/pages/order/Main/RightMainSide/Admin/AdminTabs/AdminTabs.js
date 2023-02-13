import { useContext } from "react"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { OrderContext } from "../../../../../../../context/OrderContext"
import { theme } from "../../../../../../../theme"
import Tab from "./Tab"

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isTabSelected1,
    setIsTabSelected1,
    isTabSelected2,
    setIsTabSelected2,
  } = useContext(OrderContext)

  const getSelectectedTab1 = () => {
    setIsCollapsed(true)
    setIsTabSelected2(false)
    setIsTabSelected1(true)
  }
  const getSelectectedTab2 = () => {
    setIsCollapsed(true)
    setIsTabSelected1(false)
    setIsTabSelected2(true)
  }

  return (
    <AdminTabsStyled>
      <Tab
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "" : "is-active"}
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        content=""
      />
      <Tab
        onClick={getSelectectedTab1}
        className={!isTabSelected1 ? "" : "is-active"}
        Icon={<AiOutlinePlus />}
        content={"Ajouter un produit"}
      />
      <Tab
        onClick={getSelectectedTab2}
        className={!isTabSelected2 ? "" : "is-active"}
        Icon={<MdModeEditOutline />}
        content={"Modifier un produit"}
      />
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
