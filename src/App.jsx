import "./App.css";
import "./assets/fonts/fonts.css";
import { useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Layout/Header";
import Section from "./components/Layout/Section";
import CandidateCard from "./components/Data/CandidateCard";
import VoteForm from "./components/Form/VoteForm";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const candidates = [
    {
      name: "Piyush",
      pickers: ["Bharat", "Vinay", "Shital", "Kaitan"],
      bgColor: "var(--yellow)",
      txtColor: "var(--teal)",
    },
    {
      name: "Rahul",
      pickers: ["Ankit", "Mohit", "Suresh", "Ravi"],
      bgColor: "var(--pink)",
      txtColor: "var(--teal)",
    },
    {
      name: "Kunal",
      pickers: ["Ajay", "Nikhil", "Manish"],
      bgColor: "var(--orange)",
      txtColor: "var(--light)",
    },
    {
      name: "Jagveer",
      pickers: ["Himanshu", "Vishal", "Rahul"],
      bgColor: "var(--teal)",
      txtColor: "var(--light)",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Header />
          <main className="main">
            <Section onAddVote={openModal} />
            <Card>
              {candidates.map((candidate, index) => (
                <CandidateCard
                  key={index}
                  candidate={candidate}
                  bgColor={candidate.bgColor}
                  txtColor={candidate.txtColor}
                />
              ))}
            </Card>
          </main>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <VoteForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default App;
