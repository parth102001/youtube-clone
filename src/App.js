import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarRow from "./SidebarRow";
import VideoRow from "./VideoRow";

const SidebarValue = createContext();

const App = () => {
  const [menuBtn, setMenuBtn] = useState(true);
  const onCollapse = () => {
    setMenuBtn(!menuBtn);
  };
  return (
    <div className="App">
      <Header sidebarBtn={onCollapse} />
      <div className="appLayout">
        <SidebarValue.Provider value={menuBtn}>
          <Sidebar />
        </SidebarValue.Provider>
        <VideoRow full={menuBtn}></VideoRow>
      </div>
    </div>
  );
};

export default App;
export { SidebarValue };
