import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'

function PrivateRoute({ children, ...rest }) {
    const { isAuth } = useContext(AuthContext)
    return (<Route {...rest} render={() => (isAuth ? (children) : <Redirect to="/login" />)} />)
}

export default PrivateRoute
