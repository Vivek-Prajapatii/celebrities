import React, { useState } from "react";
import "../styles/ListView.scss";
import Accordian from "./Accordian";
import celebrities from "../json/celebrities.json";

function ListView() {
  return (
    <div style={{ width: "40%", marginTop: "3rem" }}>
      <div className={"searchBar"}>
        <span>Search</span>
      </div>
      <div>
        {celebrities &&
          celebrities.map((celebrity) => (
            <>
              <Accordian celebrities={celebrity} />
            </>
          ))}
      </div>
    </div>
  );
}

export default ListView;
