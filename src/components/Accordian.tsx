import "../styles/Accordian.scss";
import React, { useState } from "react";
import ViewDetails from "./ViewDetails";

function Accordian() {
  const accordionData = {
    id: 1,
    first: "Aidan",
    last: "Wang",
    dob: "1973-10-16",
    gender: "male",
    email: "aidan.wang@example.com",
    picture: "https://randomuser.me/api/portraits/med/men/93.jpg",
    country: "New Zealand",
    description:
      "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.",
  };

  const { first, last, picture } = accordionData;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="avatar">
            <img src={picture} alt="" />
          </div>
          <div className="title">
            <div
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
            >{`${first} ${last}`}</div>
            <div style={{ paddingRight: "1rem" }}>{isActive ? "-" : "+"}</div>
          </div>
        </div>
        {isActive && (
          <div>
            <ViewDetails accordionData={accordionData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
