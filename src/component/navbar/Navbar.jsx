import React from 'react'
import style from './Navbar.module.css'
import SingleItem from './SingleItem'
import TwitterBtn from './TwitterBtn'
import { AiOutlineTwitter, AiTwotoneHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { IoIosNotificationsOutline, IoMdListBox } from "react-icons/io";
import { HiOutlineMail, HiOutlineBookmark } from "react-icons/hi";
import { CgMoreO, CgProfile } from "react-icons/cg";

function Navbar() {
    return (
        <div className={style.navbar}>
            <SingleItem link={"/home"} icon={<AiOutlineTwitter size="2.5rem" />} />
            <SingleItem link={"/home"} icon={<AiTwotoneHome size="1.7rem" />} itemName="Home" />
            <SingleItem link={"/explore"} icon={<BiHash size="1.7rem" />} itemName="Explore" />
            <SingleItem link={"/notification"} icon={<IoIosNotificationsOutline size="1.7rem" />} itemName="Notifications" />
            <SingleItem link={"/messages"} icon={<HiOutlineMail size="1.7rem" />} itemName="Messages" />
            <SingleItem link={"/bookmarks"} icon={<HiOutlineBookmark size="1.7rem" />} itemName="Bookmarks" />
            <SingleItem link={"/lists"} icon={<IoMdListBox size="1.7rem" />} itemName="Lists" />
            <SingleItem link={"/profile"} icon={<CgProfile size="1.7rem" />} itemName="Profile" />
            <SingleItem link={"/notification"} icon={<CgMoreO size="1.7rem" />} itemName="More" />
            <TwitterBtn />
        </div>
    )
}

export default Navbar
