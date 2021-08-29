import React from 'react'
import style from './Post.module.css'
function Post() {
    return (
        <div className={style.Post_main_div}>
            <div className={style.CreatePost_div}>
                <div><img className={style.img_logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldB1FZnJP_avbV3sk0MO31hlGMxjqiQZ50RtDbfUKfgys8xE4d9fqpzBltzdRFWOl3Zk&usqp=CAU" alt="" /></div>
                <div className={style.post_div}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p>Raushan kumar</p>
                        <p style={{ marginLeft: "15px", color: "gray" }}>@raushan</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi, earum cumque, tenetur in perferendis at, amet officia voluptate quaerat dolor impedit. Adipisci reprehenderit asperiores nisi nobis in fugit distinctio.</p>
                    <img className={style.post_img} src="https://fee.org/media/20153/freedom_birdcage.jpg?anchor=center&mode=crop&height=656&widthratio=2.1341463414634146341463414634&rnd=131303491560000000" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Post
