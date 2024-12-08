import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
