import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import SubscriptionRow from "./SubscriptionRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PlayIcon from "@material-ui/icons/PlayArrow";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LikeIcon from "@material-ui/icons/ThumbUpAlt";
import { SidebarValue } from "./App";

function Sidebar() {
  const design = useContext(SidebarValue);
  return (
    <div className={` ${design ? "sidebar" : "sidebar-shrink"}`}>
      <SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>

      <SidebarRow Icon={ExploreIcon} title="Explore"></SidebarRow>
      <SidebarRow Icon={SubscriptionIcon} title="Subscriptions"></SidebarRow>
      <hr className="hr" />
      <SidebarRow Icon={VideoLibraryIcon} title="Library"></SidebarRow>
      <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
      <SidebarRow Icon={PlayIcon} title="Your videos"></SidebarRow>
      <SidebarRow Icon={WatchLaterIcon} title="Watch later"></SidebarRow>
      <SidebarRow Icon={LikeIcon} title="Liked Videos"></SidebarRow>
      <hr className="hr" />
      {/* <div className="subscription">
        <h2>SUBSCRIPTIONS</h2>
        <SubscriptionRow
          img={
            "https://yt3.ggpht.com/ytc/AAUvwnjMkBpGx-VkLepHgn_PL1SS-6xyl2WCkweZPtgrqg=s68-c-k-c0x00ffffff-no-rj"
          }
          title="Gaurav Chaudhary"
        ></SubscriptionRow>
        <SubscriptionRow
          img={
            "https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s68-c-k-c0x00ffffff-no-rj"
          }
          title="Apna College"
        ></SubscriptionRow> 
        </div>*/}
    </div>
  );
}

export default Sidebar;
