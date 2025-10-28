import "./App.css";
import "./assets/fonts/fonts.css";
import { useEffect, useReducer, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Layout/Header";
import Section from "./components/Layout/Section";
import CandidateCard from "./components/Data/CandidateCard";
import VoteForm from "./components/Form/VoteForm";
import Modal from "./components/Modal";
import voteContext from "./store/auth-ctx";

const initialCandidates = [
  {
    name: "Piyush",
    pickers: ["Bharat", "Vinay", "Shital", "Kaitan"],
  },
  {
    name: "Rahul",
    pickers: ["Ankit", "Mohit", "Suresh", "Ravi"],
  },
  {
    name: "Kunal",
    pickers: ["Ajay", "Nikhil", "Manish"],
  },
  {
    name: "Jagveer",
    pickers: ["Himanshu", "Vishal", "Rahul"],
  },
];

function candidatesReducer(state, action) {
  switch (action.type) {
    case "ADD_VOTE":
      return state.map((candidate) => {
        if (candidate.name === action.payload.champ) {
          return {
            ...candidate,
            pickers: [...candidate.pickers, action.payload.studentName],
          };
        }
        return candidate;
      });

    case "DEL_VOTE":
      return state.map((candidate) => {
        if (candidate.name === action.payload.champ) {
          return {
            ...candidate,
            pickers: candidate.pickers.filter(
              (picker) => picker !== action.payload.studentName
            ),
          };
        }
        return candidate;
      });

    default:
      return state;
  }
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [candiates, dispatch] = useReducer(
    candidatesReducer,
    initialCandidates,
    () => {
      const savedData = localStorage.getItem("savedData");
      return savedData ? JSON.parse(savedData) : initialCandidates;
    }
  );

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(candiates));
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getVoterData = (voter) => {
    console.log(voter);

    dispatch({ type: "ADD_VOTE", payload: voter });
  };

  const totalVotes = candiates.reduce((total, candidate) => {
    return total + candidate.pickers.length;
  }, 0);

  return (
    <>
      <voteContext.Provider value={{ candiates, dispatch, totalVotes }}>
        <div className="container">
          <div className="wrapper">
            <Header />
            <main className="main">
              <Section onAddVote={openModal} />
              <Card>
                {candiates.map((candidate, index) => (
                  <CandidateCard
                    key={index}
                    candidate={candidate}
                    idx={index}
                  />
                ))}
              </Card>
            </main>
          </div>
        </div>

        {isModalOpen && (
          <Modal onClose={closeModal}>
            <VoteForm onClose={closeModal} getVoterData={getVoterData} />
          </Modal>
        )}
      </voteContext.Provider>
    </>
  );
};

export default App;
