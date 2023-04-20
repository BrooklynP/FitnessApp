import React from 'react';

function CreateActivityLogEntry(props) {
  const [selectedExercise, setSelectedExercise] = React.useState("");
  const [selectedReps, setSelectedReps] = React.useState("");
  const [selectedWeight, setSelectedWeight] = React.useState("");
  const [selectedDesc, setSelectedDesc] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState([]);

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
      props.logEntry(selectedExercise + " x " + selectedReps + " x " + selectedWeight + "kg")
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
      <select name="" id="exerciseDropdown" onChange={(e) => { setSelectedExercise(e.target.value) }}>
        <option value=""></option>
        <option value="Shoulder Press">Shoulder Press</option>
        <option value="Bench Press">Bench Press</option>
        <option value="Push Ups">Push Ups</option>
        <option value="Dips">Dips</option>
        <option value="Shrugs">Shrugs</option>
      </select><br></br>
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