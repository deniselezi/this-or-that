import React from "react";
import { ProgressBar } from "react-bootstrap";

function ProgressBarWrapper(props) {
  const number = props.number;
  const questionsNumber = props.questionsNumber;
  const animated = props.animated;
  const now = animated
    ? (number / questionsNumber) * 100
    : ((number - 1) / questionsNumber) * 100;

  return (
    <ProgressBar now={now} striped />
  )
}

export default ProgressBarWrapper;
