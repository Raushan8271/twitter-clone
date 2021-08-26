import React from 'react'
import style from './Login.module.css'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginBtn from './LoginBtn';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <div className={style.mainDivLogin}>
                <div className={style.mainDiv}> <p style={{ color: "#fff" }}><AiOutlineTwitter size="25rem" /></p> </div>
                <div>
                    <div className={style.secDiv}>
                        <p><AiOutlineTwitter size="3.5rem" /></p>
                        <h1 style={{ fontSize: "70px", marginTop: "50px" }}>Happening now</h1>
                        <h2 style={{ fontSize: "35px", marginTop: "40px" }}>Log in to Twitter</h2>
                        <div className={style.btnDiv}>
                            <LoginBtn icon={<FcGoogle size="1.5rem" />} item="Log in with Google" />
                            <LoginBtn icon={<FaApple size="1.5rem" />} item="Log in with Apple" />
                            <LoginBtn item="Use phone, email or username" />
                        </div>
                        <p className={style.plink} style={{ marginTop: "15px" }}>Don’t have an account? <Link className={style.linkA}>
                            Sign up
                        </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
