import React from 'react';
import CreateActivityLogEntry from '../components/createActivityLogEntry';

class ActivityLogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activityLog: ["test"]}
    }

    addActivityLog = (activityDesc) => {
        let activities = this.state.activityLog;
        activities.push(activityDesc);
        this.setState({...this.state, activityLog: activities})
    }

    createActivityLog(){
        let activitiyLogList = []
        for (let i = 0; i < this.state.activityLog.length; i++)
        {
            activitiyLogList.push(<li>{this.state.activityLog[i]}</li>)
        }
        return <ul>{activitiyLogList}</ul>
    }

    render() {
        return (
            <div>
                <p>Log activity</p>
                <div>
                    {this.createActivityLog()}
                </div>
                <CreateActivityLogEntry logEntry={this.addActivityLog} />
            </div>
        );
    }
}

export default ActivityLogPage;