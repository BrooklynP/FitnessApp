import React from 'react';

function CreateActivityLogEntry(props){
  const [selectedExercise, setSelectedExercise] = React.useState("");

  const logEntryButtonClicked = () => {
    const exerciseType = selectedExercise;
    const reps = document.getElementById("logEntryRepsInput").value
    const weight = document.getElementById("logEntryWeightInput").value
    const description = document.getElementById("logEntryDescInput").value
    props.logEntry(exerciseType + " x " + reps + " x " + weight + "kg")
  }

  return (
    <div>
      <label>Exercise</label><br></br>
      <select name="" id="exerciseDropdown" onChange={(e)=>{setSelectedExercise(e.target.value)}}>
        <option value=""></option>
        <option value="Shoulder Press">Shoulder Press</option>
        <option value="Bench Press">Bench Press</option>
        <option value="Push Ups">Push Ups</option>
        <option value="Dips">Dips</option>
        <option value="Shrugs">Shrugs</option>
      </select><br></br>
      <label>Reps</label><br></br>
      <input ID="logEntryRepsInput"></input><br></br>
      <label>Weight</label><br></br>
      <input ID="logEntryWeightInput"></input><br></br>
      <label>Notes</label><br></br>
      <input ID="logEntryDescInput"></input><br></br>
      <button className="primary" onClick={logEntryButtonClicked}>Log</button>
    </div>
  );
}

export default CreateActivityLogEntry;