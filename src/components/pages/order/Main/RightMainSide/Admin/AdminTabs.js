import React from "react"
import styled from "styled-components"

export default function AdminTabs() {
  return (
    <AdminTabsStyled className="tabs">
      <button>tab</button>
      <button>tab</button>
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
`
