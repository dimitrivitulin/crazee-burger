import styled from "styled-components"
import Profile from "./Profile"

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <Profile username={username} />
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  display: flex;
`
