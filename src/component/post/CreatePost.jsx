import React from 'react'
import style from './Post.module.css'

function CreatePost() {
    return (
        <div className={style.CreatePost_main_div}>
            <div className={style.CreatePost_div}>
                <div><img className={style.img_logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldB1FZnJP_avbV3sk0MO31hlGMxjqiQZ50RtDbfUKfgys8xE4d9fqpzBltzdRFWOl3Zk&usqp=CAU" alt="" /></div>
                <div className={style.input_div}>
                    <input className={style.CreatePost_input} type="text" placeholder="What's happening?" />
                </div>
            </div>
            <div className={style.CreatePost_Div_btn}>
                <button className={style.CreatePost_btn}>Tweet</button>
            </div>
        </div >
    )
}

export default CreatePost
