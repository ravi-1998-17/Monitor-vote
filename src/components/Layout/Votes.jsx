import React from "react";
import "@/assets/fonts/fonts.css"
import "@/components/Layout/Votes.css"

const Votes = ({totalVotes}) => {
  return (
    <>
      <div className="votes">
        <button className="totalBtn">VOTES</button>
        <h5 className="totalCount">{+totalVotes}</h5>
      </div>
    </>
  );
};

export default Votes;
