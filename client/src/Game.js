import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom"; 
import ImageCard from "./ImageCard";
import VotesCard from "./VotesCard";
import ProgressBarWrapper from "./ProgressBarWrapper";
import axios from "axios";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      questionsNumber: 0,
      clicked: false,  // keeps track of whether either ImageCard has been clicked
      animated: false,  // keeps track of whether ImageCard has performed its animation after being clicked
      picked: null  // true for first, false for second
    }

    this.handleClick = this.handleClick.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  async componentDidMount() {
    const newData = await this.fetchData(this.props.number);
    this.setState({
      data: newData[0],
      questionsNumber: newData[1]
    })
  }

  async fetchData(number) {
    try {
      const res = await axios.get(`http://localhost:3001/questions/${number}`)
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  handleClick(e, first) {
    if (this.state.clicked) {
      return;
    }

    const data = this.state.data;
    const number = this.props.number;

    if (first) {
      data.first.votes += 1;
      this.setState({
        picked: true
      })
    } else {
      data.second.votes += 1
      this.setState({
        picked: false
      })
    }
    
    // send data to backend
    this.postData(data, number);

    // set clicked to true
    this.setState({
      clicked: true
    });
  }

  postData(data, number) {
    axios.post(`http://localhost:3001/post/${number}`, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onAnimationEnd() {
    this.setState({
      animated: true
    })
  }

  render() {
    const number = Number(this.props.number);
    const data = this.state.data;
    console.log(data);
    if (!data) {
      return <></>
    } else if (data === "No more questions left.") {
      return (
        <Navigate to="/end" />
      )
    }

    const clicked = this.state.clicked;
    const animated = this.state.animated;
    const picked = this.state.picked;
    const questionsNumber = this.state.questionsNumber;
    console.log(questionsNumber);

    let firstCard;
    let secondCard;
    if (!animated) {
      firstCard = <ImageCard 
        name={data.first.name}
        link={data.first.link}
        first={true}
        clicked={clicked}
        handleClick={this.handleClick}
        onAnimationEnd={this.onAnimationEnd}
      />
      secondCard = <ImageCard 
        name={data.second.name}
        link={data.second.link}
        first={false}
        clicked={clicked}
        handleClick={this.handleClick}
        onAnimationEnd={this.onAnimationEnd}
      /> 
    } else {
      firstCard = <VotesCard
        id="votes"
        votes={data.first.votes}
        picked={picked}
      />
      secondCard = <VotesCard
        id="questionRow"
        votes={data.second.votes}
        picked={!picked}
      />
    }

    return (
      <Container fluid>
        <Row id="questionRow">
          Question {number}
        </Row>
        <Row id="imagesRow">
          <Col className="justify-content-center" xs={8} sm={8} lg={4}>
            {firstCard}
          </Col>
          <Col className="justify-content-center" xs={8} sm={8} lg={4}>
            {secondCard}
          </Col>
        </Row>
        <Row>
          <Col className="justify-content-center" xs={12} sm={12} lg={9}>
            <ProgressBarWrapper
              number={number}
              questionsNumber={questionsNumber}
              animated={animated}
            />
          </Col>
          <Col className="justify-content-center">
            <Button 
              id="nextbutton" 
              variant="light" 
              size="lg" 
              disabled={animated ? false : true} 
              href={`/questions/${number+1}`}>
              {number === questionsNumber ? "Finish" : "Next"}
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Game;
