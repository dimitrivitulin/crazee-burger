import styled from "styled-components"
import { theme } from "../../../../../../../theme"

export default function Tab({ onClick, className, Icon, text }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      {Icon}
      {text ? <span>{text}</span> : ""}
    </TabStyled>
  )
}
const TabStyled = styled.button`
  position: relative;
  top: -1px;
  padding: 10px 22px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: ${theme.fonts.size.M};
  color: ${theme.colors.greySemiDark};
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
  cursor: pointer;
  :hover {
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};
  }
  span {
    padding-left: 15px;
  }
`
