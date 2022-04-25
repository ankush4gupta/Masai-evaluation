import { createContext, useState } from "react"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [uData, setUdata] = useState({
        TotalEmployees: 10,
        TotalTerminated: 0,
        TotalPromoted: 0,
        TotalNew: 0

    })
    const handleudata = (key, value) => {
        setUdata({ ...uData, key: value })
    }
    const [isAuth, setisAuth] = useState(false);
    const handleAuth = (state) => {
        setisAuth(state)
    }
    return <AuthContext.Provider value={{
        isAuth, handleAuth, uData, handleudata
    }}>{children}</AuthContext.Provider>
}