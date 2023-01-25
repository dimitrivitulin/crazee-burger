import styled from "styled-components"
import { theme } from "../../theme"

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled type="submit">
      {label}
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  line-height: 1rem;
  font-weight: ${theme.weights.medium};

  letter-spacing: 1px;
  &:focus,
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    outline: 1px solid ${theme.colors.primary};
  }
  svg {
    height: 100%;
    line-height: 1rem;
    margin-left: 0.2rem;
  }
`
