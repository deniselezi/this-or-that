import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageCard from "./ImageCard";
import axios from "axios";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    // because componentDidMount is only invoked after the initial render,
    // some dummy data is needed so as to not break the render method
    // alternative would be some kind of loading screen
    this.state = {
      data: {
        first: {
          name: "Cat",
          votes: 0,
          link: "./assets/cat.jpg"
        },
        second: {
          name: "Dog",
          votes: 0,
          link: "./assets/dog.jpg"
        }
      }
    }
    // event handler for when an image is clicked
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, first) {
    const data = this.state.data;
    const number = this.props.number;

    if (first) {
      data.first.votes += 1;
    } else {
      data.second.votes += 1
    }
    
    axios.post(`http://localhost:3001/post/${number}`, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async componentDidMount() {
    const newData = await this.fetchData(this.props.number);
    this.setState({
      data: newData
    })
  }

  async fetchData(number) {
    const res = await axios.get(`http://localhost:3001/questions/${number}`)
    return res.data;
  }

  render() {
    const number = this.props.number;
    const data = this.state.data;

    return (
      <Container fluid>
        <Row id="questionRow">
          Question {number}
        </Row>
        <Row id="imagesRow">
          <Col className="justify-content-center" xs={8} sm={8} lg={4}>
            <ImageCard 
              name={data.first.name}
              votes={data.first.votes}
              link={data.first.link}
              first={true}
              handleClick={this.handleClick}
            />
          </Col>
          <Col className="justify-content-center" xs={8} sm={8} lg={4}>
            <ImageCard 
              name={data.second.name}
              votes={data.second.votes}
              link={data.second.link}
              first={false}
              handleClick={this.handleClick}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Game;
