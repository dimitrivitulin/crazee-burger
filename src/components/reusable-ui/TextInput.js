import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} {...extraProps} type="text" />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  .icon {
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.greySemiDark};
    margin-right: 8px;
  }
  input {
    width: 100%;
    border: none;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};
    font-family: "Open Sans", sans-serif;
    padding-left: 10px;
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`
