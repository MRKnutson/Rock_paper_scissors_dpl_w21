import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import RockPaperScissors from './pages/RockPaperScissors';
import RockPaperScissors2p from './pages/RockPaperScissors2p';

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/RPS" element={<RockPaperScissors />} />
        <Route path = "/RPS2" element={<RockPaperScissors2p />} />
      </Routes>
    </div>
  );
}

export default App;
