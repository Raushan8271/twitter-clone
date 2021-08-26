import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
function SingleItem({ link, icon, itemName }) {
    return (
        <Link className={style.link} to={link}>
            <div className={style.a}>
                {icon}
                <p style={{marginLeft:"15px"}}>{itemName}</p>
            </div>
        </Link>
    )
}

export default SingleItem
