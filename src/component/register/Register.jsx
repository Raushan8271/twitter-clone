import React from 'react'
import style from './Login.module.css'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginBtn from './LoginBtn';
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            <div className={style.mainDivLogin}>
                <div className={style.mainDiv}> <p style={{ color: "#fff" }}><AiOutlineTwitter size="25rem" /></p> </div>
                <div>
                    <div className={style.secDiv}>
                        <p><AiOutlineTwitter size="3.5rem" /></p>
                        <h1 style={{ fontSize: "70px", marginTop: "40px" }}>Happening now</h1>
                        <h2 style={{ fontSize: "35px", marginTop: "40px" }}>Join Twitter today.</h2>
                        <div className={style.btnDiv}>
                            <LoginBtn link={"/register/registerPage"} icon={<FcGoogle size="1.5rem" />} item="Sign up with Google" />
                            <LoginBtn link={"/register/registerPage"} icon={<FaApple size="1.5rem" />} item="Sign up with Apple" />
                            <LoginBtn link={"/register/registerPage"} item="Sign up with phone or email" />
                        </div>
                        <p style={{ fontSize: "14px", marginTop: "10px" }}>By signing up, you agree to the Terms of Service and Privacy <br></br> Policy, including Cookie Use.</p>
                        <p className={style.plink} style={{ marginTop: "15px" }}>Already have an account? <Link to='/' className={style.linkA}>
                            Log in
                        </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
