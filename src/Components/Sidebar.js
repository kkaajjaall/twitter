import React from 'react'
import {FaTwitter,FaHome,FaHashtag,FaRegBell,FaRegEnvelope,
    FaRegBookmark,FaClipboardList,FaUserAlt,FaMehBlank} from"react-icons/fa"
    const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#"> <FaTwitter className="icon" className="logo"/></a> </li>
                <li><a href="#"> <FaHome className="icon" className="logo"/>Home</a> </li>
                <li><a href="#"> <FaHashtag className="icon"/> Explor</a> </li>
                <li><a href="#"> <FaRegBell className="icon"/> Notification</a> </li>
                <li><a href="#"> <FaRegEnvelope className="icon"/> Messagess</a> </li>
                <li><a href="#"> <FaRegBookmark className="icon"/>Bookmark</a> </li>
                <li><a href="#"> <FaClipboardList className="icon"/>List</a> </li>
                <li><a href="#"> <FaUserAlt className="icon"/>Profile</a> </li>
                <li><a href="#"> <FaMehBlank className="icon"/> More</a> </li>
                <div className="sidebar-btn">
                    <a href=""> Profile </a>
                </div>
                
             </ul>  
            
             
        </div>
    )
}

export default Sidebar;
