import React from "react";

const PickerItem = ({ name, onDelete}) => {
  return (
    <div className="picker-item">
      <span >{name}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default PickerItem;
