import React from "react";
import Card from "react-bootstrap/Card";

function ImageCard(props) {
  return (
    <Card
      className="bg-light text-dark"
      id={props.clicked ? "imageClicked" : "image"}
      onClick={(e) => props.handleClick(e, props.first)}
      onAnimationEnd={props.onAnimationEnd}>

      <Card.Img src={require("" + props.link)} variant="top" />
      <Card.Body>
        <Card.Text>{props.name}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ImageCard;