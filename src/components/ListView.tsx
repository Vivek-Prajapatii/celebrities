import React, { useState, useEffect } from "react";
import "../styles/ListView.scss";
import Accordian from "./Accordian";
import celebrities from "../json/celebrities.json";
import { Celebrity } from "../model/celebrity.model";

function ListView() {
  const emptyObj = {
    id: 0,
    first: "",
    last: "",
    dob: "",
    gender: "",
    email: "",
    picture: "",
    country: "",
    description: "",
  };

  // let [celebrities, setCelebrities] = useState<Celebrity[]>(famousCelebrities);
  const [updatedCelebrity, setUpdatedCelebrity] = useState<Celebrity>();
  const [isActive, setActive] = useState(Array(celebrities.length).fill(false));
  const [isEdit, setEdit] = useState(false);
  const [isSaved, setSaved] = useState(false);

  const handleAccordionClick = (index: any) => {
    const newState = isActive.map((state, i) => (i === index ? !state : false));
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

  console.log(updatedCelebrity);

  // useEffect(() => {
  //   if (famousCelebrities) {
  //     setCelebrities(famousCelebrities);
  //   }
  // }, []);

  return (
    <div style={{ width: "40%", marginTop: "3rem" }}>
      <div className={"searchBar"}>
        <span>Search</span>
      </div>
      <div>
        {celebrities &&
          celebrities?.map((celebrity, index) => {
            return (
              <Accordian
                key={index}
                celebrity={celebrity}
                onClick={() => handleAccordionClick(celebrity?.id)}
                isActive={isActive[index + 1]}
                setEdit={setEdit}
                isEdit={isEdit}
                setUpdatedCelebrity={setUpdatedCelebrity}
                updatedCelebrity={updatedCelebrity}
                setSaved={setSaved}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ListView;
