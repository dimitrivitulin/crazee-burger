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
  height: 100%;
  width: 100%;
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  overflow: scroll;
`
