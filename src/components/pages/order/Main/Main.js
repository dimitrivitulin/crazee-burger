import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu/Menu"

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">basket</div>
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
  grid-template-columns: 25% 1fr;
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  overflow: scroll;
  .basket {
    background-color: violet;
  }
`
