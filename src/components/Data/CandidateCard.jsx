import React from "react";
import "./CandidateCard.css";
import PickerItem from "./PickerItem";
import "@/assets/fonts/fonts.css";
import { cardStyles } from "./cardStyles";

const CandidateCard = ({ candidate, idx, dispatch }) => {
  const { bgColor, txtColor } = cardStyles[idx % cardStyles.length];

  return (
    <div className="cad-wrapper">
      <div
        className="candidate-card"
        style={{ backgroundColor: bgColor, color: txtColor }}
      >
        <h2 className="name">{candidate.name}</h2>
        <hr style={{ backgroundColor: txtColor }} />

        <div className="pickers">
          <p className="section-title">Pickers</p>
          <span style={{ backgroundColor: txtColor }}></span>
        </div>

        <div className="picker-list">
          {candidate.pickers.map((picker, index) => (
            <PickerItem
              key={index}
              name={picker}
              onDelete={() =>
                dispatch({
                  type: "DEL_VOTE",
                  payload: { champ: candidate.name, studentName: picker },
                })
              }
              txtColor={txtColor}
            />
          ))}
        </div>
      </div>

      <div
        className="card-footer"
        style={{ backgroundColor: bgColor, color: txtColor }}
      >
        <p>{candidate.pickers.length}</p>
      </div>
    </div>
  );
};

export default CandidateCard;
