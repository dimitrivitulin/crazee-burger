import styled from "styled-components"
import { theme } from "../../theme"

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  outline: none;
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  line-height: 1rem;
  font-weight: ${theme.fonts.weights.heavy};
  cursor: pointer;
  transition: 0.2s ease-out;
  &:active,
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }
  svg {
    height: 100%;
    line-height: 1rem;
    margin-left: 0.2rem;
  }
`
