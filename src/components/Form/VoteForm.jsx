import React, { useState } from "react";
import "./VoteForm.css";
import "@/assets/fonts/fonts.css";

const VoteForm = ({ onClose, getVoterData}) => {
  const [formData, setFormData] = useState({
    studentName: "",
    champ: "Piyush",
  });

  const onChangeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName.trim())
      return alert("Enter your name & select your Champ");
    getVoterData(formData)
    onClose();
  };

  return (
    <form className="vote-form" onSubmit={handleSubmit}>
      <label>
        <strong>Student Name:</strong>
        <input
          type="text"
          value={formData.studentName}
          name="studentName"
          onChange={onChangeHandler}
          placeholder="Enter name"
        />
      </label>

      <label>
        <strong>Select Champion:</strong>
        <select value={formData.champ} onChange={onChangeHandler} name="champ">
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
