import React from "react";
import Votes from "./Votes";
import "@/components/Layout/Section.css"
import "@/assets/fonts/fonts.css"

const Section = () => {
  return (
    <section className="section">
      <h1 className="head">Who’s Your Class Hero?</h1>
      <div className="vote">
        <div className="total-vote">
          <Votes />
        </div>
        <button className="add-vote">Pick Your Hero</button>
      </div>
    </section>
  );
};

export default Section;
