import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const getTabsConfig = (currentTabSelected) => [
  {
    index: "add",
    content: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    content: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
]
export const getTabselected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
