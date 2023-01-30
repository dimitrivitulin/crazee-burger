import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs"
import { theme } from "../../../../../theme"

export default function RightSide() {
  const { username } = useParams()
  return (
    <RightSideStyled>
      <div className="left-right-side">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/" className="disconnect">
          Se déconnecter
        </Link>
      </div>
      <div className="right-right-side">
        <BsPersonCircle className="icon" />
      </div>
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  .left-right-side {
    p {
      font-family: "Open Sans";
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.P0};
      line-height: 22px;
      text-align: end;
      span {
        color: #ffa01b;
        font-weight: ${theme.weights.bold};
      }
    }
    .disconnect {
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.XXS};
      line-height: 14px;
    }
  }
  .right-right-side {
    .icon {
      font-size: ${theme.fonts.P4};
      color: ${theme.colors.greyBlue};
    }
  }
`
