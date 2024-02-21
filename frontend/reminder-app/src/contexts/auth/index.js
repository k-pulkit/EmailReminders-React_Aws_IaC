import { useContext } from "react"
import { authContext } from "./provider"

export const useAuth = () => {
    return useContext(authContext)
}