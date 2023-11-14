import "../styles/Accordian.scss";
import React, { useState } from "react";
import ViewDetails from "./ViewDetails";



function Accordian(props: { celebrities: any }) {
  const { celebrities } = props;

  const { first, last, picture } = celebrities;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          style={
            isActive
              ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomStyle:"none" }
              : {}
          }
          onClick={() => setIsActive(!isActive)}
        >
          <div className="avatar">
            <img src={picture} alt="" />
          </div>
          <div className="title">
            <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              <h2>{`${first} ${last}`}</h2>
            </div>
            <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              <h2>{isActive ? "-" : "+"}</h2>
            </div>
          </div>
        </div>
        {isActive && (
          <div>
            <ViewDetails celebrities={celebrities} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
