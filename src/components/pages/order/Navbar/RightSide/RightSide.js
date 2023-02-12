import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "../../../../reusable-ui/ToggleButton"
import ToastAdmin from "./ToastAdmin"
import { useContext } from "react"
import { OrderContext } from "../../../../../context/OrderContext"

export default function RightSide({ username }) {
  const { isAdmin, setIsAdmin } = useContext(OrderContext)
  const onToggle = () => {
    setIsAdmin(!isAdmin)
    if (!isAdmin) {
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
        isChecked={isAdmin}
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
