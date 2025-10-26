import React from "react";
import "@/components/Card/Card.css";

const Card = ({ bgColor, textColor, children }) => {
  const votersData = ["Vinay", "Ravi", "Guddu", "Kartik"];

  const deleteVoteHandler = () => {
    console.log("Voter Deleted");
  };

  const votersList = votersData.map((voter) => (
    <li>
      {voter}
      <span>
        <button onClick={deleteVoteHandler}>Del</button>
      </span>
    </li>
  ));

  return (
    <>
      {/* <div style={{ backgroundColor: bgColor, color: textColor }}> */}
      <div className="wrapper">
        <div className="card">
          <div className="inner-card">
            <h1 className="champ">Piyush</h1>
            <hr />

            <div class="pickers-header">
              <span>Pickers</span>
              <div class="pickers-line"></div>
            </div>

            <ul>{votersList}</ul>
          </div>
        </div>

        <div className="gain-vote">
          <p>25</p>
        </div>
      </div>
    </>
  );
};

export default Card;
