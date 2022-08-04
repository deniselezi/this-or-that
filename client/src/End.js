import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function End(props) {
  return (
    <Container>
      <Row>
        <h1>Thanks for playing!</h1>
      </Row>
      <Row>
        <Button 
          id="nextbutton" 
          variant="light" 
          size="lg" 
          href="/">
          Back to Home
        </Button>
      </Row>
    </Container>
  )
}

export default End;