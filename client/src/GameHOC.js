import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Game from "./Game";

function GameHOC(props) {
  const { id } = useParams();
  return (
    <Game number={id} />
  )
}

export default GameHOC;
