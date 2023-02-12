import { useContext } from "react"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { OrderContext } from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"

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
    setIsTabSelected2(false)
    setIsTabSelected1(true)
  }
  const getSelectectedTab2 = () => {
    setIsTabSelected1(false)
    setIsTabSelected2(true)
  }

  return (
    <AdminTabsStyled>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "" : "goblack"}
      >
        {isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
      </button>
      <button
        onClick={getSelectectedTab1}
        className={!isTabSelected1 ? "" : "goblack"}
      >
        <AiOutlinePlus /> <span>Ajouter un produit</span>
      </button>
      <button
        onClick={getSelectectedTab2}
        className={!isTabSelected2 ? "" : "goblack"}
      >
        <MdModeEditOutline /> <span>Modifier un produit</span>
      </button>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  /* background-color: transparent; */
  padding-left: 70px;
  display: flex;
  gap: 1px;
  position: relative;
  top: 1px;
  button {
    line-height: 1;
    padding: 12px 22px;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: ${theme.fonts.size.P0};
    line-height: 22px;
    background: ${theme.colors.white};
    border: none;
    border-bottom: 2px solid ${theme.colors.greyLight};
    outline: none;
    box-shadow: ${theme.shadows.outside};
    border-radius: 5px 5px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    :hover {
      text-decoration: underline;
      border-bottom: 2px solid ${theme.colors.white};
    }
  }

  .goblack {
    background-color: ${theme.colors.background_dark};
    border-bottom: 2px solid ${theme.colors.background_dark};
    color: ${theme.colors.white};
    :hover {
      border-bottom: 2px solid ${theme.colors.background_dark};
    }
  }
`
