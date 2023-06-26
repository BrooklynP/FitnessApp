import logo from './logo.svg';
import './App.css';
import FitnessHeader from './coreComponents/header.jsx';
import { Routes, Route } from 'react-router-dom';
import ActivityLog from './pages/ActivityLog';
import Home from './pages/Home';
import EntryForm from './pages/EntryForm';
import RoutineListPage from './pages/RoutineList';
import ExerciseListPage from './pages/ExerciseList';

const appTitle = "Fitness App";

function App() {
  if (!('indexedDB' in window)) {
    return <p>This browser doesn't support IndexedDB - A technology required for this app to work</p>;
  }

  const requestDBOpen = window.indexedDB.open("fitness-app", 1)
  requestDBOpen.onerror = (event) => {
    console.error("Why didn't you allow my web app to use IndexedDB?!", event);
  };

  requestDBOpen.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains("workouts")) {
      db.createObjectStore("workouts", { keyPath: "id", autoIncrement: true });
    }
    if (!db.objectStoreNames.contains("routines")) {
      db.createObjectStore("routines", { keyPath: "id", autoIncrement: true });
    }
    if (!db.objectStoreNames.contains("exercises")) {
      db.createObjectStore("exercises", { keyPath: "id", autoIncrement: true });
    }
  };

  return (
    <div className="App">
      <FitnessHeader appTitle={appTitle}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<ActivityLog />} />
          <Route path="/createEntry" element={<EntryForm />} />
          <Route path="/routines" element={<RoutineListPage />} />
          <Route path="/exercises" element={<ExerciseListPage />} />
       </Routes>
    </div>
  );
}

export default App;
