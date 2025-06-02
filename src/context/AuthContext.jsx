import React, { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider,signInWithRedirect  } from "firebase/auth";

const  AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [currentUser, setCurrentUser]= useState(null)
   const [loading, setLoading] = useState(true)


   //sign in google
   const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

   }

   //logout
    const logout = () =>{
        signOut(auth)
    }

    // set  currentUser
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
            setLoading(false)
        });
        return unsubcribe
    })

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logout,
        loading
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}
