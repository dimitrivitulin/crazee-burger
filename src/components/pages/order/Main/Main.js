import styled from "styled-components"
import { theme } from "../../../../theme"
import RightMainSide from "./RightMainSide/Menu/RightMainSide"

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <RightMainSide />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  flex: 1;
  display: grid;
  /* grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  overflow: scroll;
  position: relative;
  /* .basket {
    background-color: violet;
  } */
`
