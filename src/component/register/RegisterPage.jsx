import React, { useState } from 'react'
import style from '../login/Login.module.css'
import { AiOutlineTwitter } from "react-icons/ai";
import axios from 'axios';


function RegisterPage() {
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (fname.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            try {
                await axios.post('http://localhost:2345/register', {
                    fname: fname,
                    email: email,
                    password: password
                })
                alert("Registration Successful")
            } catch (e) {
                alert("Something went wrong")
                console.log(e)
            }

        } else {
            alert("input field is empty")
        }
    }
    return (
        <div className={style.loginPage}>
            <form onSubmit={handleSubmit} className={style.loginInner}>
                <p><AiOutlineTwitter size="3rem" /></p>
                <h1>Register to Twitter</h1>
                <input className={style.login_input} onChange={e => setFname(e.target.value)} type="text" placeholder="Full Name" />
                <input className={style.login_input} onChange={e => setEmail(e.target.value)} type="text" placeholder="Phone, email, or username" />
                <input className={style.login_input} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" className={style.login_Btn}>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage
