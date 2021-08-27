import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import style from './Login.module.css'

function LoginPage() {
    return (
        <div className={style.loginPage}>
            <div className={style.loginInner}>
                <p><AiOutlineTwitter size="3rem" /></p>
                <h1>Log in to Twitter</h1>
                <input className={style.login_input} type="text" placeholder="Phone, email, or username" />
                <input className={style.login_input} type="password" placeholder="Password" />
                <button className={style.login_Btn}>Log in</button>
            </div>
        </div>
    )
}

export default LoginPage
