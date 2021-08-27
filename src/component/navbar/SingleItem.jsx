import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
function SingleItem({ link, icon, itemName }) {
    return (
        <Link className={style.link} to={link}>
            <span className={style.a}>
                {icon}
                <p style={{ marginLeft: "15px" }}>{itemName}</p>
            </span>
        </Link>
    )
}

export default SingleItem
