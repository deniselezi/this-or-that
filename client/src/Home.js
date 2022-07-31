import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div id="startcontainer">
      <Button id="startbutton" variant="light" size="lg" href="/questions/1">
        Start
      </Button>
    </div>
  );
}

export default Home;
