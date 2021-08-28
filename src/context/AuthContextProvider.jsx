import React, { createContext, useState } from 'react'
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setAuth] = useState(false)

    const handleAuth = async(email, password) => {
        
        console.log(email)
        console.log(password)
    }
    const handleLogout = () => {
        setAuth(false)
    }
    const value = { isAuth, handleAuth, handleLogout }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }