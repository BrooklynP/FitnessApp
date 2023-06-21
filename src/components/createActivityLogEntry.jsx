import React from 'react';
import DropDown from '../coreComponents/dropdown';

function CreateActivityLogEntry(props) {
  const [selectedExercise, setSelectedExercise] = React.useState("");
  const [selectedReps, setSelectedReps] = React.useState("");
  const [selectedWeight, setSelectedWeight] = React.useState("");
  const [selectedDesc, setSelectedDesc] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState([]);
  const [workouts, setWorkouts] = React.useState(["Shoulder Press", "Bench Press", "Push Ups", "Dips", "Shrugs", "Planks", "Crunches", "Hip Thrusts","Bridges"]);

  const logEntryButtonClicked = () => {
    const newValidationErrors = [];

    if (selectedExercise === "") {
      newValidationErrors.push("You need to select an exercise");
    }
    if (selectedReps === "") {
      newValidationErrors.push("You need to select an amount of reps")
    }
    if (selectedWeight === "") {
      newValidationErrors.push("You need to select a weight")
    }
    if (validationErrors.length === 0) {
      props.logEntry({exercise: selectedExercise, reps: selectedReps, weight: selectedWeight, notes: selectedDesc})
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
      <DropDown values={workouts} id="exerciseDropdown" name="" onChangeFunction={(e) => { setSelectedExercise(e.target.value) }}></DropDown><br></br>
      <label>Reps</label><br></br>
      <input id="logEntryRepsInput" type="number"  onChange={(e) => { setSelectedReps(e.target.value) }}></input><br></br>
      <label>Weight</label><br></br>
      <input id="logEntryWeightInput" type="number"  onChange={(e) => { setSelectedWeight(e.target.value) }}></input><br></br>
      <label>Notes</label><br></br>
      <input id="logEntryDescInput" onChange={(e) => { setSelectedDesc(e.target.value) }}></input><br></br>
      <button className="primary" onClick={logEntryButtonClicked}>Log</button>
      <ul>{getValidationErrorsList()}</ul>
    </div>
  );
}

export default CreateActivityLogEntry;