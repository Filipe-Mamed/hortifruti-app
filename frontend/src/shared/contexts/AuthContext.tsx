import {createContext} from "react"

interface IAuthContextType {
    isAuthenticated: boolean;
    login: () => void
    logout: () => void
}

export const AuthContext = createContext<IAuthContextType | undefined>(undefined)