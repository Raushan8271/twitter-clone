import React, { createContext, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setAuth] = useState(false)
    const history = useHistory()

    const handleAuth = async (email, password) => {
        if (email.trim().length > 0 && password.trim().length > 0) {
            try {
                const { data } = await axios.post('http://localhost:2345/login', {
                    email: email,
                    password: password
                })
                alert("Login Successful")
                localStorage.setItem("profileName", data)
                setAuth(true)
                history.push("/home")
            } catch (e) {
                alert("Something went wrong")
                console.log(e)
            }

        } else {
            alert("input field is empty")
        }
    }
    const handleLogout = () => {
        setAuth(false)
        alert("Logout Successful")
        localStorage.removeItem("profileName")
        history.push("/")
    }
    const value = { isAuth, handleAuth, handleLogout }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }