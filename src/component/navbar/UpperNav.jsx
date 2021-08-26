import React from 'react'
import style from './Navbar.module.css'
function UpperNav({ item }) {
    return (
        <div className={style.UpperNav}>
            <h3 className={style.h3}>{item}</h3>
        </div>
    )
}

export default UpperNav
