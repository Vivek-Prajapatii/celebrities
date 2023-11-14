import "../styles/Accordian.scss";
import React, { useState } from "react";
import ViewDetails from "./ViewDetails";

function Accordian(props: { celebrities: any }) {
  const { celebrities } = props;

  const { first, last, picture } = celebrities;
  const [isActive, setActive] = useState(false);
  const [isEditState, setEditState] = useState(false);
  const [isUpdated, setUpdated] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          style={
            isActive
              ? {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderBottomStyle: "none",
                }
              : {}
          }
        >
          <div className="avatar">
            <img src={picture} alt="" />
          </div>
          <div className="title">
            <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              {isEditState ? (
                <input
                  type="text"
                  defaultValue={`${first} ${last}`}
                  className="edit-input"
                  onChange={() => setUpdated(true)}
                />
              ) : (
                <h2>{`${first} ${last}`}</h2>
              )}
            </div>
            <div
              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
              onClick={() => !isEditState && setActive(!isActive)}
              title={isEditState ? "Save or Discard the unsaved changes" : ""}
            >
              <h2>{isActive ? "-" : "+"}</h2>
            </div>
          </div>
        </div>
        {isActive && (
          <div>
            <ViewDetails
              celebrities={celebrities}
              isEditState={isEditState}
              setEditState={setEditState}
              setUpdated={setUpdated}
              isUpdated={isUpdated}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
