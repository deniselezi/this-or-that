import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questions/1' element={<Game number={1} />} />
        <Route path='questions/2' element={<Game number={2} />} />
        <Route path='questions/3' element={<Game number={3} />} />
      </Routes>
    </>
  );
}

export default App;
