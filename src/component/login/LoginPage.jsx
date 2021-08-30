import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from "react-icons/ai";
import { AuthContext } from '../../context/AuthContextProvider';
import style from './Login.module.css'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { handleAuth } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAuth(email, password)
    }
    return (
        <div className={style.loginPage}>
            <form onSubmit={handleSubmit} className={style.loginInner}>
                <Link to='/'><p><AiOutlineTwitter size="3rem" /></p></Link>
                <h1>Log in to Twitter</h1>
                <input className={style.login_input} onChange={e => setEmail(e.target.value)} type="text" placeholder="Phone, email, or username" />
                <input className={style.login_input} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" className={style.login_Btn}>Log in</button>
                <p className={style.plink} style={{ marginTop: "15px" }}>Don’t have an account? <Link to='/register/registerPage' className={style.linkA}>
                    Sign up
                </Link> </p>
            </form>
        </div>
    )
}

export default LoginPage
