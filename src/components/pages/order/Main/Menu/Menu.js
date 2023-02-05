import { useState } from "react"
import styled from "styled-components"
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu"
import { theme } from "../../../../../theme"
import Burger from "./Burger"
export default function Menu() {
  const [burgers, setBurgers] = useState(fakeMenu2)
  return (
    <MenuStyled>
      {burgers.map((burger) => (
        <Burger {...burger} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  width: 100%;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.inside};
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-auto-rows: 330px;
  column-gap: 85px;
  row-gap: 60px;
  padding: 50px 50px 150px;
  justify-content: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    visibility: hidden;
    width: 8px;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: ${theme.colors.background_white};
    }

    &::-webkit-scrollbar {
      visibility: visible;
      background-color: ${theme.colors.background_white};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${theme.colors.greySemiDark};
    }
  }
`
