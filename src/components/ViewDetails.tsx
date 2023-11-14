import React, { useState } from "react";
import "../styles/ViewDetails.scss";
import { calculateAge } from "../utils/dob-to-age.util";

function ViewDetails(props: { celebrities: any }) {
  const { celebrities } = props;
  const { description, country, gender, dob } = celebrities;
  const age = calculateAge(dob);
  const [isDeleteClicked, setDeleteClicked] = useState<boolean>(false);

  console.log(isDeleteClicked);

  return (
    <div className="collapse">
      <div className="info">
        <div className="age">
          <h4>Age</h4>
          <span>{age} Years</span>
        </div>
        <div className="gender">
          <h4>Gender</h4>
          <span>{gender}</span>
        </div>
        <div className="country">
          <h4>Country</h4>
          <span>{country}</span>
        </div>
      </div>
      <div className="description">
        <div className="description-title" style={{ display: "flex" }}>
          <h4>Description</h4>
        </div>
        <span> {description}</span>
        <div className="update">
          <button
            type="button"
            className="icon-button-delete"
            onClick={() => setDeleteClicked(true)}
          ></button>
          <button type="button" className="icon-button-edit"></button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
