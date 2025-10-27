import React from "react";
import "@/components/Card/Card.css";


const Card = ({children}) => {
  return <div className="card">{children}</div>;
};

export default Card;
