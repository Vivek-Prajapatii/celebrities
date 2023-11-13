import React from "react";
import "../styles/ListView.scss";
import Accordian from "./Accordian";

function ListView() {
  return (
    <div style={{ width: "35%", marginTop: "3rem" }}>
      <div className={"searchBar"}>
        <span>Search</span>
      </div>
      <div>
        <Accordian />
      </div>
    </div>
  );
}

export default ListView;
