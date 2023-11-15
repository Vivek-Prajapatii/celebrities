import React, { useState, useEffect, useMemo } from "react";
import "../styles/ListView.scss";
import Accordian from "./Accordian";
import famousCelebrities from "../json/celebrities.json";
import { Celebrity } from "../model/celebrity.model";

function ListView() {

  let [celebrities, setCelebrities] = useState<Celebrity[]>(famousCelebrities);
  const [updatedCelebrity, setUpdatedCelebrity] = useState<Celebrity>();
  const [isActive, setActive] = useState(
    Array(celebrities.length-1).fill(false)
  );
  const [isEdit, setEdit] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [isDeleted, setDeleted] = useState<number>();

  const handleAccordionClick = (index: any) => {
    const newState = isActive.map((state, i) =>
      i === index ? !state : false
    );
    setActive(newState);
  };

  useEffect(() => {
    if (updatedCelebrity && isSaved) {
      var indexToUpdate = celebrities.findIndex(
        (obj) => obj.id === updatedCelebrity?.id
      );
      celebrities[indexToUpdate] = updatedCelebrity;
    }
  }, [celebrities, isSaved, updatedCelebrity]);

  const filteredCelebs = useMemo(() => {
    console.log(isDeleted);
    if (isDeleted) {
      return celebrities.filter((obj) => obj.id !== isDeleted);
    }
    return celebrities;
  }, [isDeleted]);

  useEffect(() => {
    setCelebrities(filteredCelebs);
    setActive(isActive.fill(false));
  }, [filteredCelebs]);

  console.log(isActive);
  return (
    <div style={{ width: "40%", marginTop: "3rem" }}>
      <div className={"searchBar"}>
        <span>Search</span>
      </div>
      <div>
        {celebrities &&
          celebrities?.map((celebrity) => {
            return (
              <Accordian
                key={celebrity.id}
                celebrity={celebrity}
                onClick={() => handleAccordionClick(celebrity?.id)}
                isActive={isActive[celebrity.id]}
                setEdit={setEdit}
                isEdit={isEdit}
                setUpdatedCelebrity={setUpdatedCelebrity}
                updatedCelebrity={updatedCelebrity}
                setSaved={setSaved}
                setDeleted={setDeleted}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ListView;
