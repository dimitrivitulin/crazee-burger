import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <TextInputStyled className={className}>
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
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.S};
    color: ${theme.colors.greySemiDark};
    margin: 0 8px 0 10px;
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
