import React from "react";
import "./VotesCard.css";

function VotesCard(props) {
  return (
    <div className="text" id={props.picked ? "picked" : "notpicked"}>
      {`Votes: ${props.votes}`}
    </div>
  )
}

export default VotesCard;
