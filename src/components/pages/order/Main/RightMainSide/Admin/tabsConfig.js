import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const tabsConfig = [
  {
    index: "add",
    text: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    text: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
]
export const getTabselected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
