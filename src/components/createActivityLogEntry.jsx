import React from 'react';

class CreateActivityLogEntry extends React.Component {
    constructor(props){
        super(props);
        this.logEntryButtonClicked = this.logEntryButtonClicked.bind(this);
    }

    logEntryButtonClicked(){
      const logDesc = document.getElementById("logEntryInput").value
      this.props.logEntry(logDesc)
    }

   render() {
    return (
      <div>
        <input ID="logEntryInput"></input>
        <button className="primary" onClick={this.logEntryButtonClicked}>Log</button>
      </div>
    );
  }
}

export default CreateActivityLogEntry;