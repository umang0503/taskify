"use client"
import { Children, createContext, useState } from "react"
const UserContext= createContext({})

import { ReactNode } from "react";

export const AuthContext = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{user:""}}>
            {children}
        </UserContext.Provider>

    )
}