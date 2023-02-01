import styled from "styled-components"
import { theme } from "../../../../theme"

export default function Main() {
  return <MainStyled></MainStyled>
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 100%;
  width: 100%;
  box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
`
