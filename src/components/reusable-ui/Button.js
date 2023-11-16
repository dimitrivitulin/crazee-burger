import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function Button({
  label,
  Icon,
  className,
  version = "success",
}) {
  return (
    <ButtonStyled className={className} version={version}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  ${({ version }) => extraStyle[version]}
`

const extraStylePrimary = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  font-family: Arial;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
  }
`

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;

  border: 1px solid ${theme.colors.background_white};

  font-weight: ${theme.fonts.weights.semiBold};

  :hover {
    border: 1px solid ${theme.colors.success};
    background: ${theme.colors.white};
    color: ${theme.colors.success};
  }

  :after {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
}
