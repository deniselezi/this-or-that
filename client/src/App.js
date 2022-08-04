import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home';
import GameHOC from './GameHOC';
import End from './End';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questions/:id' element={<GameHOC />} />
        <Route path='end' element={<End />} />
      </Routes>
    </>
  );
}

export default App;
