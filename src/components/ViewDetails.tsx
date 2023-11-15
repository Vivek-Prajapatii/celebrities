import React, { useState, useEffect } from "react";
import "../styles/ViewDetails.scss";
import { calculateAge } from "../utils/calculate-age.util";
import Modal from "./Modal";
import { Celebrity } from "../model/celebrity.model";

function ViewDetails(props: {
  celebrities: Celebrity;
  isEditState: boolean;
  setEditState: Function;
  isUpdated: boolean;
  setUpdated: Function;
  setEmpty: Function;
  areEmpty: boolean;
  updatedCelebrity: Celebrity | undefined;
  setUpdatedCelebrity: Function;
  setSaved: Function;
  setDeleted: Function;
}) {
  const {
    celebrities,
    isEditState,
    setEditState,
    isUpdated,
    setUpdated,
    setEmpty,
    areEmpty,
    updatedCelebrity,
    setUpdatedCelebrity,
    setSaved,
    setDeleted,
  } = props;
  const { description, country, gender, dob, id } = celebrities;
  const age = calculateAge(dob);

  const [isModalOpen, setModalOpen] = useState(false);
  const [discard, setDiscard] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleYesClick = () => {
    setDeleted(id);
    setModalOpen(false);
    setEditState(false);
  };

  useEffect(() => {
    if (discard) {
      setModalOpen(true);
    }
  }, [discard]);

  if (isModalOpen) {
    let message = "";
    let yesPlaceholder = "";

    if (!isEditState) {
      message = "Are you sure you want to delete?";
      yesPlaceholder = "Delete";
    } else if (discard) {
      message = "Are you sure you want to discard the changes?";
      yesPlaceholder = "Discard";
    } else if (isUpdated && areEmpty) {
      message = "All fields are mandatory to fill";
      yesPlaceholder = "";
    }

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
                defaultValue={age?.toString() || ""}
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
                  required
                  className="edit-input"
                  onChange={(e) => {
                    setUpdated(true);
                    updatedCelebrity
                      ? setUpdatedCelebrity({
                          ...updatedCelebrity,
                          gender: e.target.value,
                        })
                      : setUpdatedCelebrity({
                          ...celebrities,
                          gender: e.target.value,
                        });
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="rather not say">Rather Not Say</option>
                  <option value="other">Other</option>
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
                required
                className="edit-input"
                defaultValue={country}
                onChange={(e) => {
                  setUpdated(true);
                  if (e.target.value === "") {
                    setEmpty(true);
                  } else {
                    updatedCelebrity
                      ? setUpdatedCelebrity({
                          ...updatedCelebrity,
                          country: e.target.value,
                        })
                      : setUpdatedCelebrity({
                          ...celebrities,
                          country: e.target.value,
                        });
                  }
                }}
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
              required
              onChange={(e) => {
                setUpdated(true);
                if (e.target.value === "") {
                  setEmpty(true);
                } else {
                  updatedCelebrity
                    ? setUpdatedCelebrity({
                        ...updatedCelebrity,
                        description: e.target.value,
                      })
                    : setUpdatedCelebrity({
                        ...celebrities,
                        description: e.target.value,
                      });
                }
              }}
              defaultValue={description}
            />
          ) : (
            <span>{description}</span>
          )}

          <div className="update">
            {!isEditState ? (
              <>
                <button
                  type="button"
                  className={"icon-button-delete"}
                  onClick={(e) => {
                    setModalOpen(true);
                  }}
                ></button>
                <button
                  type={"button"}
                  className={"icon-button-edit"}
                  disabled={age && age > 18 ? false : true}
                  onClick={() => {
                    setEditState(true);
                  }}
                ></button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={"icon-button-cancel"}
                  onClick={() => {
                    isUpdated ? setDiscard(true) : setEditState(false);
                  }}
                ></button>
                <button
                  type={"submit"}
                  className={"icon-button-correct"}
                  disabled={!isUpdated}
                  onClick={() => {
                    if (!areEmpty) {
                      setSaved(true);
                      setEditState(false);
                    } else setModalOpen(true);
                  }}
                ></button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ViewDetails;
