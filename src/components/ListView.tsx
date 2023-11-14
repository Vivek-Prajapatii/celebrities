import React, { useState } from "react";
import "../styles/ListView.scss";
import Accordian from "./Accordian";
import celebrities from "../json/celebrities.json";

function ListView() {
  const [isActive, setActive] = useState(Array(celebrities.length).fill(false));

  const handleAccordionClick = (index: any) => {
    const newState = isActive.map((state, i) => (i === index ? !state : false));
    setActive(newState);
  };

  return (
    <div style={{ width: "40%", marginTop: "3rem" }}>
      <div className={"searchBar"}>
        <span>Search</span>
      </div>
      <div>
        {celebrities &&
          celebrities.map((celebrity, index) => {
            return (
              <>
                <Accordian
                  celebrities={celebrity}
                  onClick={() => handleAccordionClick(celebrity?.id)}
                  isActive={isActive[index + 1]}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default ListView;
