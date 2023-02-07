import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import Profile from "./Profile"
import { theme } from "../../../../../theme"
import ToggleButton from "./ToggleButton"

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <ToggleButton />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  display: flex;
  .toaster {
    max-width: 300px;
  }
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
