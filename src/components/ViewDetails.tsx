import React, { useState } from "react";
import "../styles/ViewDetails.scss";
import { calculateAge } from "../utils/dob-to-age.util";
import Modal from "./Modal";

function ViewDetails(props: {
  celebrities: any;
  isEditState: boolean;
  setEditState: Function;
  isUpdated: boolean;
  setUpdated: Function;
}) {
  const { celebrities, isEditState, setEditState, isUpdated, setUpdated } =
    props;
  const { description, country, gender, dob } = celebrities;
  const age = calculateAge(dob);

  // const [isDeleteClicked, setDeleteClicked] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState(false);
  // const [isUpdated, setUpdated] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleYesClick = () => {
    setModalOpen(false);
    setEditState(false);
  };

  if (isModalOpen) {
    const message = !isEditState
      ? "Are you sure you want to delete?"
      : "Are you sure you want to discard the changes?";

    const yesPlaceholder = isEditState ? "Discard" : "Delete";

    return (
      <>
        <Modal
          message={message}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onYes={handleYesClick}
          yesPlaceholder={yesPlaceholder}
          noPlaceholder="Cancel"
        />
      </>
    );
  }
  return (
    <div className="collapse">
      <form>
        <div className="info">
          <div className="age">
            <h4>Age</h4>
            {isEditState ? (
              <input
                className="edit-input"
                type="text"
                value={age?.toString() || ""}
              />
            ) : (
              <span>{age} Years</span>
            )}
          </div>
          <div className="gender">
            <h4>Gender</h4>
            {isEditState ? (
              <>
                <select
                  name="gender"
                  id="gender"
                  className="edit-input"
                  onChange={() => setUpdated(true)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Rather Not Say</option>
                </select>
              </>
            ) : (
              <span>{gender}</span>
            )}
          </div>
          <div className="country">
            <h4>Country</h4>
            {isEditState ? (
              <input
                type="text"
                className="edit-input"
                defaultValue={country}
                onChange={() => setUpdated(true)}
              />
            ) : (
              <span>{country}</span>
            )}
          </div>
        </div>
        <div className="description">
          <div className="description-title" style={{ display: "flex" }}>
            <h4>Description</h4>
          </div>
          {isEditState ? (
            <textarea
              className={"edit-description"}
              rows={6}
              onChange={() => setUpdated(true)}
            >
              {description}
            </textarea>
          ) : (
            <span>{description}</span>
          )}

          <div className="update">
            <button
              type="button"
              className={
                isEditState ? "icon-button-cancel" : "icon-button-delete"
              }
              onClick={() => setModalOpen(true)}
            ></button>
            {!isEditState ? (
              <button
                type={"button"}
                className={"icon-button-edit"}
                disabled={age && age > 18 ? false : true}
                onClick={() => {
                  setEditState(true);
                }}
              ></button>
            ) : (
              <button
                type={"button"}
                className={"icon-button-correct"}
                disabled={!isUpdated}
                onClick={() => {
                  setEditState(false);
                }}
              ></button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ViewDetails;
