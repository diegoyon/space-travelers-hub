import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navbar/Header';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
