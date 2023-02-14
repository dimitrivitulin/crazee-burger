import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const getTabsConfig = () => [
  {
    index: "add",
    content: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    content: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
]
export const getTabselected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
