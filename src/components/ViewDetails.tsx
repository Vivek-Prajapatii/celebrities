import React from "react";
import "../styles/ViewDetails.scss";

function ViewDetails(props: { accordionData: any }) {
  const { accordionData } = props;
  const { description } = accordionData;

  return (
    <div>
      <div className="info">
        <div className="age">
          <h4>Age</h4>
                  <span>{ }</span>
        </div>
        <div className="gender"></div>
        <div className="country"></div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}

export default ViewDetails;
