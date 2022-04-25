import { createContext, useState } from "react"
export const Contextdata = createContext();
export const ContextdataProvider = ({ children }) => {
    const [userid, setuserid] = useState();
    const handleID = (num) => {
        setuserid(num)
    }
    return <Contextdata.Provider value={{ userid, handleID }}>{children}</Contextdata.Provider>
} 