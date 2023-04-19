import logo from './logo.svg';
import './App.css';
import FitnessHeader from './coreComponents/header.jsx';
import { Routes, Route } from 'react-router-dom';
import ActivityLog from './pages/ActivityLog';
import Home from './pages/Home';
import EntryForm from './pages/EntryForm';

const appTitle = "Fitness App";

function App() {
  return (
    <div className="App">
      <FitnessHeader appTitle={appTitle}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<ActivityLog />} />
          <Route path="/createEntry" element={<EntryForm />} />
       </Routes>
    </div>
  );
}

export default App;
