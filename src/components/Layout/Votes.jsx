import React, { useContext } from "react";
import "@/assets/fonts/fonts.css";
import "@/components/Layout/Votes.css";
import voteContext from "@/store/auth-ctx";

const Votes = () => {
  const { totalVotes } = useContext(voteContext);
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
