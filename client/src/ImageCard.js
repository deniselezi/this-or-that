import React from "react";
import axios from "axios";

function ImageCard(props) {
  axios.get("http://localhost:3001/questions/1").then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  })
  return (
    <>
      image
    </>
  )
}

export default ImageCard;