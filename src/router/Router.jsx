import React, { useContext } from 'react'
import Navbar from '../component/navbar/Navbar'
import UpperNav from '../component/navbar/UpperNav'
import { Route, Switch } from 'react-router-dom'
import Login from '../component/login/Login'
import Register from '../component/register/Register'
import LoginPage from '../component/login/LoginPage'
import RegisterPage from '../component/register/RegisterPage'
import { AuthContext } from '../context/AuthContextProvider';
import Home from '../component/home/Home'
import Profile from '../component/profile/Profile'


function Router() {
    const { isAuth } = useContext(AuthContext)
    const profileName = localStorage.getItem("profileName")
    return (
        <div>
            {
                isAuth ?
                    <>
                        <Navbar />
                        <Switch>
                            <Route exact path="/home">
                                <UpperNav item="Home" />
                                <Home />
                            </Route>
                            <Route exact path="/explore">
                                <UpperNav item="Explore" />
                                <div style={{ backgroundColor: "blue", width: "45%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                                    <h1>Explore</h1>
                                </div>
                            </Route>
                            <Route exact path="/notification">
                                <UpperNav item="Notification" />
                                <div style={{ backgroundColor: "blue", width: "45%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                                    <h1>Notification</h1>
                                </div>
                            </Route>
                            <Route exact path="/messages">
                                <UpperNav item="Messages" />
                                <div style={{ backgroundColor: "blue", width: "45%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                                    <h1>Messages</h1>
                                </div>
                            </Route>
                            <Route exact path="/bookmarks">
                                <UpperNav item="Bookmarks" />
                                <div style={{ backgroundColor: "blue", width: "45%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                                    <h1>Bookmarks</h1>
                                </div>
                            </Route>
                            <Route exact path="/lists">
                                <UpperNav item="Lists" />
                                <div style={{ backgroundColor: "blue", width: "45%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                                    <h1>Lists</h1>
                                </div>
                            </Route>
                            <Route exact path="/profile">
                                <UpperNav item={profileName} />
                                <Profile />
                            </Route>
                        </Switch>
                    </>
                    :
                    <>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/register/registerPage">
                            <RegisterPage />
                        </Route>
                    </>
            }

        </div>
    )
}

export default Router
