import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"

export const tabsConfig = [
  {
    index: "add",
    text: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    text: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: <EditForm />,
  },
]
export const getTabselected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
