import React from "react";
import Card from "react-bootstrap/Card";

function ImageCard(props) {
  return (
    <Card
      className="bg-light text-dark"
      id="image"
      onClick={(e) => props.handleClick(e, props.first)}>
      <Card.Img src={require("" + props.link)} alt={`${props.name} image`}/>
      <Card.ImgOverlay>
        <Card.Title>{props.name}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  )
}

export default ImageCard;