import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../context/OrderContext"

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext)

  return (
    <AdminTabsStyled>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "" : "goblack"}
      >
        {isCollapsed ? "down" : "up"}
      </button>
      <button>Add</button>
      <button>Update</button>
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
