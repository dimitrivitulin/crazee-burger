import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Profile({ username }) {
  return (
    <ProfileStyled>
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
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
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
