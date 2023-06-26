import React, { useEffect } from 'react';
import DropDown from '../coreComponents/dropdown';

function CreateActivityLogEntry(props) {
  const maxExercises = 10;

  const [selectedExercise, setSelectedExercise] = React.useState(-1);
  const [selectedReps, setSelectedReps] = React.useState("");
  const [selectedWeight, setSelectedWeight] = React.useState("");
  const [selectedDesc, setSelectedDesc] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState([]);
  const [exercises, setWorkouts] = React.useState([]);

  const getExercisesFromDB = (event) => {
    const db = event.target.result;

    const transaction = db.transaction(["exercises"], "readonly");
    const objectStore = transaction.objectStore("exercises");

    const exercises = [];
    objectStore.openCursor().onsuccess = async (event) => {
      const cursor = event.target.result;
      if (cursor && exercises.length < maxExercises) {
        exercises.push(cursor.value);
        cursor.continue();
      } else {
        db.close();
        setWorkouts(exercises);
      }
    }
  }

  const getExercises = () => {
    const requestDBOpen = window.indexedDB.open("fitness-app");
    requestDBOpen.onsuccess = getExercisesFromDB;
  }

  useEffect(() => {
    getExercises();
  }, [exercises]);

  const logEntryButtonClicked = () => {
    const newValidationErrors = [];

    if (selectedExercise === -1) {
      newValidationErrors.push("You need to select an exercise");
    }
    if (selectedReps === "") {
      newValidationErrors.push("You need to select an amount of reps")
    }
    if (selectedWeight === "") {
      newValidationErrors.push("You need to select a weight")
    }
    if (validationErrors.length === 0) {
      props.logEntry({ exercise: selectedExercise, reps: selectedReps, weight: selectedWeight, notes: selectedDesc })
    }
    setValidationErrors(newValidationErrors);
  }

  const getValidationErrorsList = () => {
    return validationErrors.map((validationError, index) =>
      <li key={index}>{validationError}</li>
    );
  }

  return (
    <div>
      <label>Exercise</label><br></br>
      <DropDown values={exercises} id="exerciseDropdown" name="" onChangeFunction={(e) => { setSelectedExercise(e.target.value) }}></DropDown><br></br>
      <label>Reps</label><br></br>
      <input id="logEntryRepsInput" type="number" onChange={(e) => { setSelectedReps(e.target.value) }}></input><br></br>
      <label>Weight</label><br></br>
      <input id="logEntryWeightInput" type="number" onChange={(e) => { setSelectedWeight(e.target.value) }}></input><br></br>
      <label>Notes</label><br></br>
      <input id="logEntryDescInput" onChange={(e) => { setSelectedDesc(e.target.value) }}></input><br></br>
      <button className="primary" onClick={logEntryButtonClicked}>Log</button>
      <ul>{getValidationErrorsList()}</ul>
    </div>
  );
}

export default CreateActivityLogEntry;