import React from 'react'
import style from './Profile.module.css'

function Profile() {
    const profileName = localStorage.getItem("profileName")
    return (
        <div className={style.Profile_div}>
            <div className={style.Profile_div_pic}>
                <img className={style.Profile_pic} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldB1FZnJP_avbV3sk0MO31hlGMxjqiQZ50RtDbfUKfgys8xE4d9fqpzBltzdRFWOl3Zk&usqp=CAU" alt="" />
            </div>
            <h1 style={{textAlign:"center"}}>{profileName}</h1>
        </div>
    )
}

export default Profile
