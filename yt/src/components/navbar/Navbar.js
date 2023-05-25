import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
const Navbar = () => {
  return (
    <header>
    <nav>
        <div className="left">
      <div className="logo">
        <img src="./yt-logo.jpg" alt="" />
        <p>Youtube</p>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <div className="searchicon">
          <SearchIcon id="searchy" />
        </div>
      </div>
   
    {/* <div className="right">
<div className="video"><VideoCallIcon/></div>
<div className="noti"><NotificationsNoneIcon/></div>
<div className="Avatar"><Avatar/></div>
</div> */}
    </div>
    </nav>
    </header>
  );
};

export default Navbar;
