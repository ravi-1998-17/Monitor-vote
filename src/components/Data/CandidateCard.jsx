import React from "react";
import "./CandidateCard.css";
import PickerItem from "./PickerItem";
import "@/assets/fonts/fonts.css";

const CandidateCard = ({ candidate, bgColor, txtColor }) => {
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
              onDelete={() => console.log("Delete:", picker)}
              txtColor={txtColor}
            />
          ))}
        </div>
      </div>

      <div
        className="card-footer"
        style={{ backgroundColor: bgColor, color: txtColor }}
      >
        <p>5</p>
      </div>
    </div>
  );
};

export default CandidateCard;
