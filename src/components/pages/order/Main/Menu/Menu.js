import styled from "styled-components"
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu"
import Card from "./Card"
export default function Menu() {
  const burgers = fakeMenu2
  return (
    <MenuStyled>
      {burgers.map((burger) => (
        <Card burger={burger} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  width: 100%;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 330px;
  column-gap: 85px;
  row-gap: 60px;
  padding: 50px 150px;
  justify-content: center;
  overflow-y: hidden;
`
