import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Rockets from "./pages/Rockets";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
