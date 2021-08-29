import React from 'react'
import CreatePost from '../post/CreatePost'
import Post from '../post/Post'
import style from './Home.module.css'

function Home() {
    return (
        <div className={style.home_div}>
            <CreatePost />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Home
