import { useContext } from "react"
import ParentContext from "@/Context/ParentProvider"

export const useParent = () => {
	return useContext(ParentContext)
}
