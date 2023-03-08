import logo from './logo.svg';
import './App.css';
import FitnessHeader from './components/header';
import { Routes, Route } from 'react-router-dom';
import ActivityLog from './pages/ActivityLog';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <FitnessHeader />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<ActivityLog />} />
       </Routes>
    </div>
  );
}

export default App;
