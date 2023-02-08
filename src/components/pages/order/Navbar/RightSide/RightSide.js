import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "../../../../reusable-ui/ToggleButton"
import { useState } from "react"
import ToastAdmin from "./ToastAdmin"

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
      />
      <ToastAdmin />
      <Profile username={username} />
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  display: flex;
  padding-right: 50px;
`
