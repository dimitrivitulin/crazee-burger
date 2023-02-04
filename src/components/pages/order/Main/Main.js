import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu/Menu"

export default function Main() {
  return (
    <MainStyled>
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  overflow: scroll;
`
