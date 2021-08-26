import React from 'react'
import Navbar from '../component/navbar/Navbar'
import UpperNav from '../component/navbar/UpperNav'
import { Route, Switch } from 'react-router-dom'

function Router() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/home">
                    <UpperNav item="Home" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Home</h1>
                    </div>
                </Route>
                <Route exact path="/explore">
                    <UpperNav item="Explore" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Explore</h1>
                    </div>
                </Route>
                <Route exact path="/notification">
                    <UpperNav item="Notification" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Notification</h1>
                    </div>
                </Route>
                <Route exact path="/messages">
                    <UpperNav item="Messages" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Messages</h1>
                    </div>
                </Route>
                <Route exact path="/bookmarks">
                    <UpperNav item="Bookmarks" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Bookmarks</h1>
                    </div>
                </Route>
                <Route exact path="/lists">
                    <UpperNav item="Lists" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Lists</h1>
                    </div>
                </Route>
                <Route exact path="/profile">
                    <UpperNav item="Profile" />
                    <div style={{ backgroundColor: "blue", width: "77%", height: "2000px", marginLeft: "23%", marginTop: "50px" }}>
                        <h1>Profile</h1>
                    </div>
                </Route>
            </Switch>

        </div>
    )
}

export default Router
