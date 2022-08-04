import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container className="vertical-center">
      <Button variant="light" size="lg" href="/questions/1">
        Start
      </Button>
    </Container>
  );
}

export default Home;
