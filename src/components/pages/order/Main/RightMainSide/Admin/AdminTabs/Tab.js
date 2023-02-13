import styled from "styled-components"
import { theme } from "../../../../../../../theme"

export default function Tab({ onClick, className, Icon, content }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      {Icon}
      {content ? <span>{content}</span> : ""}
    </TabStyled>
  )
}
const TabStyled = styled.button`
  line-height: 1;
  padding: 12px 22px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: ${theme.fonts.size.P0};
  line-height: 22px;
  background: ${theme.colors.white};
  border: none;
  border-bottom: 2px solid ${theme.colors.greyLight};
  outline: none;
  box-shadow: ${theme.shadows.outside};
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};
  }
  span {
    padding-left: 15px;
  }
`
