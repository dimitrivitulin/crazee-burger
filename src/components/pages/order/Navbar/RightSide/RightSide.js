import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from "react-toastify"
import styled from "styled-components"
import Profile from "./Profile"
import { theme } from "../../../../../theme"
import ToggleButton from "../../../../reusable-ui/ToggleButton"
import { useState } from "react"

export default function RightSide({ username }) {
  const [isChecked, setIsChecked] = useState(false)
  const onToggle = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  return (
    <RightSideStyled>
      <ToggleButton
        onToggle={onToggle}
        isChecked={isChecked}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        className={"toggle-style"}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  display: flex;
  padding-right: 50px;
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
  .toggle-style {
    padding-right: 50px;
  }
`
