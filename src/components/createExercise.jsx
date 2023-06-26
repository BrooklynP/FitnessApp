import React from 'react';

function CreateExercise(props) {
  const [selectedName, setSelectedName] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState([]);


  const createExerciseButtonClicked = () => {
    const newValidationErrors = [];

    if (selectedName === "") {
      newValidationErrors.push("You need to select a name");
    }
    if (validationErrors.length === 0) {
      props.logEntry({name: selectedName});
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
      <label>Exercise Name</label><br></br>
      <input id="createExerciseNameInput" onChange={(e) => { setSelectedName(e.target.value) }}></input><br></br>
      <button className="primary" onClick={createExerciseButtonClicked}>Create</button>
      <ul>{getValidationErrorsList()}</ul>
    </div>
  );
}

export default CreateExercise;