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
  justify-content: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  svg {
    color: ${theme.colors.greyLight};
    height: 100%;
  }
  input {
    width: 100%;
    border: none;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};
    font-family: "Open Sans", sans-serif;
  }
`
