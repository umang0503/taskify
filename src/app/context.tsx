"use client"
import { Children, createContext, use, useContext, useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { auth } from "../../firebase/firebaseauth";


const UserContext= createContext({})

import { ReactNode } from "react";
import router from "next/router";

export const AuthContext = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const handleGoogleSignup = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    const handleGoogleSignOut=() => {
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
          setUser(firebaseUser);
         
        });
        return () => unsubscribe();
      }, []);
    return(
        <UserContext.Provider value={{ user, handleGoogleSignup, handleGoogleSignOut } as any}>
            {children}
        </UserContext.Provider>

    )
}
export const UserAuthContext=()=>{
    return useContext(UserContext)
}