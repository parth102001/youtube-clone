import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

function Header(props) {
  const collapseEvent = () => {
    props.sidebarBtn();
  };
  return (
    <div className="header">
      <div className="headerLeft">
        <Button>
          <MenuIcon onClick={collapseEvent} />
        </Button>
        <img
          className="headerLogo"
          src="/images/logo2.png"
          alt="this is an img"
        />
      </div>
      <div className="headerInput">
        <input type="text" placeholder="Search" />
        <SearchIcon className="searchBtn" />
      </div>
      <div className="headerIcons">
        <VideoIcon className="headerIcon" />
        <AppIcon className="headerIcon" />
        <NotificationIcon className="headerIcon" />
        <Avatar
          className="avatar"
          alt="Remy Sharp"
          src="https://source.unsplash.com/1600x900/?face"
        />
      </div>
      {/* <div className="headerAvatar">
            </div> */}
    </div>
  );
}

export default Header;
