import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"

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
        {isCollapsed ? "down" : "up"}
      </button>
      <button
        onClick={getSelectectedTab1}
        className={!isTabSelected1 ? "" : "goblack"}
      >
        Add
      </button>
      <button
        onClick={getSelectectedTab2}
        className={!isTabSelected2 ? "" : "goblack"}
      >
        Update
      </button>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  /* background-color: transparent; */
  padding-left: 70px;
  display: flex;
  gap: 1px;
  button {
    line-height: 1;
    padding: 12px 22px;
    /* height: 43px; */
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  .goblack {
    background-color: #000;
    color: #fff;
  }
`
