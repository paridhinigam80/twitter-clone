import React from 'react';
import{FaTwitter,FaHome,FaHashtag,FaRegBell,FaEnvelope,FaRegBookmark,FaList,FaUserAlt} from 'react-icons/fa';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href=""><FaTwitter className="icons"/></a>
                </li>
                <li>
                    <a href=""><FaHome className="icons"/>Home</a>
                </li>
                <li>
                    <a href=""><FaHashtag  className="icons"/>Explore</a>        
                </li>
                

                <li>
                    <a href=""><FaRegBell className="icons"/>Notification</a>
                </li>
                <li>
                    <a href=""><FaEnvelope className="icons"/>Messages</a>
                </li>
                <li>
                    <a href=""><FaRegBookmark className="icons"/>Bookmark</a>
                </li>
                <li>
                    <a href=""><FaList className="icons"/>List</a>
                </li>
                <li>
                    <a href=""><FaUserAlt className="icons"/>Profile</a>
                </li> 
                <div className="sidebar__Btn">
          <a href="">Tweets</a>
        </div>   
            </ul>
            
        </div>
    )
}

export default Sidebar
