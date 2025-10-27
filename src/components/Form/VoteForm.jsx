import React, { useState } from "react";
import "./VoteForm.css";
import "@/assets/fonts/fonts.css";

const VoteForm = ({ onClose, onSubmit }) => {
  const [studentName, setStudentName] = useState("");
  const [champion, setChampion] = useState("Piyush");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName.trim()) return;
    onSubmit({ studentName, champion });
    onClose();
  };

  return (
    <form className="vote-form" onSubmit={handleSubmit}>
      <label>
        <strong>Student Name:</strong>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter name"
        />
      </label>

      <label>
        <strong>Select Champion:</strong>
        <select value={champion} onChange={(e) => setChampion(e.target.value)}>
          <option value="Piyush">Piyush</option>
          <option value="Rahul">Rahul</option>
          <option value="Kunal">Kunal</option>
          <option value="Jagveer">Jagveer</option>
        </select>
      </label>
      <div className="btn-box">
        <button type="submit" className="vBtn vote-btn">
          Vote
        </button>
        <button type="button" className="vBtn close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </form>
  );
};

export default VoteForm;
