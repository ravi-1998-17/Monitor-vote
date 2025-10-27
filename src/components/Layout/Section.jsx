import React from "react";
import Votes from "./Votes";
import "@/components/Layout/Section.css";
import "@/assets/fonts/fonts.css";

const Section = ({onAddVote}) => {
  return (
    <section className="section">
      <h1 className="head">Who’s Your Class Hero?</h1>
      <hr />
      <p>
        Vote for your class hero by picking your favorite classmate! See who’s
        leading by checking the votes and pickers for each candidate. Rally your
        friends, cast your vote, and find out who wins the title of class hero.
      </p>
      <Votes />
      <button className="add-vote" onClick={onAddVote}>Pick Your Hero</button>
    </section>
  );
};

export default Section;
