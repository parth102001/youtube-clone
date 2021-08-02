import React, { useContext } from "react";
import "./SidebarRow.css";
import { SidebarValue } from "./App";

function SidebarRow({ selected, Icon, title }) {
  const context = useContext(SidebarValue);
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="icon" />
      {context && <h2>{title}</h2>}
    </div>
  );
}

export default SidebarRow;
