import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuestionNumber from "./QuestionNumber";
import ImageCard from "./ImageCard";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <QuestionNumber number={this.props.number} />
        </Row>
        <Row>
          <Col>
            <ImageCard></ImageCard>
          </Col>
          <Col>
            <ImageCard></ImageCard>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Game;
