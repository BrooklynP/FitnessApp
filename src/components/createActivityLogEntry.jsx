import React from 'react';

class CreateActivityLogEntry extends React.Component {
    constructor(props){
        super(props);
        this.logEntryButtonClicked = this.logEntryButtonClicked.bind(this);
    }

    logEntryButtonClicked(){
      const exerciseType = document.getElementById("logEntryExerciseInput").value
      const reps = document.getElementById("logEntryRepsInput").value
      const weight = document.getElementById("logEntryWeightInput").value
      const description = document.getElementById("logEntryDescInput").value
      this.props.logEntry(exerciseType + " x " + reps + " x " + weight + "kg")
    }

   render() {
    return (
      <div>
        <label>Exercise</label><br></br>
        {/* <select name="" id="exerciseDropdown">
          <option value="0"></option>
          <option value="1">Shoulder Press</option>
          <option value="1">Bench Press</option>
          <option value="1">Push Ups</option>
          <option value="1">Dips</option>
          <option value="1">Shrugs</option>
        </select> */}
        <input ID="logEntryExerciseInput"></input><br></br>
        <label>Reps</label><br></br>
        <input ID="logEntryRepsInput"></input><br></br>
        <label>Weight</label><br></br>
        <input ID="logEntryWeightInput"></input><br></br>
        <label>Notes</label><br></br>
        <input ID="logEntryDescInput"></input><br></br>
        <button className="primary" onClick={this.logEntryButtonClicked}>Log</button>
      </div>
    );
  }
}

export default CreateActivityLogEntry;