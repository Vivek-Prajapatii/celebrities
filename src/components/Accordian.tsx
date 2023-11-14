import "../styles/Accordian.scss";
import React, { useEffect, useState } from "react";
import ViewDetails from "./ViewDetails";
import "../styles/Accordian.scss";

function Accordian(props: {
  celebrities: any;
  onClick: Function;
  isActive: any[];
  setEdit: Function;
  isEdit: boolean;
}) {
  const { celebrities, onClick, isActive, setEdit, isEdit } = props;
  const { first, last, picture, id } = celebrities;
  const [isEditState, setEditState] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [areEmpty, setEmpty] = useState(false);

  useEffect(() => {
    if (isEditState) {
      setEdit(true);
    } else setEdit(false);
  }, [isEditState]);

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
                  onChange={(e) => {
                    setUpdated(true);
                    if (e.target.value === "") {
                      setEmpty(true);
                    }
                  }}
                />
              ) : (
                <h2>{`${first} ${last}`}</h2>
              )}
            </div>
            <div
              className={`div-${id}`}
              style={{ paddingLeft: "1rem", paddingRight: "2rem" }}
              onClick={() => {
                !isEdit && onClick();
              }}
              title={isEditState ? "Save or Discard the unsaved changes" : ""}
            >
              <h2>{isActive ? "-" : "+"}</h2>
            </div>
          </div>
        </div>
        {isActive ? (
          <div>
            <ViewDetails
              celebrities={celebrities}
              isEditState={isEditState}
              setEditState={setEditState}
              setUpdated={setUpdated}
              isUpdated={isUpdated}
              setEmpty={setEmpty}
              areEmpty={areEmpty}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Accordian;
