import { createContext, useState } from "react"
export const Contextdata = createContext();
export const ContextdataProvider = ({ children }) => {
    
    return <Contextdata.Provider value={{ userid, handleID }}>{children}</Contextdata.Provider>
} 