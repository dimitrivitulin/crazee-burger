import styled from "styled-components"
import { theme } from "../../../../../theme"
import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"

export default function Profile() {
  const { username } = useParams()
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
  padding-left: 50px;
  .left-right-side {
    p {
      font-family: "Open Sans";
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.MD};
      line-height: 22px;
      text-align: end;
      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.weights.bold};
      }
    }
    .disconnect {
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.XXS};
      line-height: 14px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .right-right-side {
    .icon {
      font-size: ${theme.fonts.size.P4};
      color: ${theme.colors.greyBlue};
    }
  }
`
