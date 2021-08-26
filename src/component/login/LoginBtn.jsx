import React from 'react'
import style from './Login.module.css'
import { Link } from 'react-router-dom'

function LoginBtn({ icon, item }) {
    return (
        <button className={style.loginBtn}>
            <Link>
                <div className={style.a}>
                    {icon}
                    <p style={{ marginLeft: "8px" }}>{item}</p>
                </div>
            </Link>
        </button>
    )
}

export default LoginBtn
