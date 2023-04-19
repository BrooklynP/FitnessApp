import React from 'react';
import CreateActivityLogEntry from '../components/createActivityLogEntry';
import PageTitle from '../coreComponents/pageTitle';

class ActivityLogPage extends React.Component {
    constructor(props) {
        super(props);
        let storedActivityLog = JSON.parse(localStorage.getItem("activities")) || []
        this.state = {activityLog: storedActivityLog}
    }

    addActivityLog = (activityDesc) => {
        let activities = this.state.activityLog;
        activities.push(activityDesc);
        this.setState({...this.state, activityLog: activities})
        localStorage.setItem("activities", JSON.stringify(activities));
    }

    createActivityLog(){
        const activitiyLogList = this.state.activityLog.map((activityLogItem, index)=>
            <li key={index}>{activityLogItem}</li>
        )
        return <ul>{activitiyLogList}</ul>
    }

    render() {
        return (
            <div>
                <PageTitle pageTitle={"Activity Log"}/>
                <div>
                    {this.createActivityLog()}
                </div>
                <CreateActivityLogEntry logEntry={this.addActivityLog} />
            </div>
        );
    }
}

export default ActivityLogPage;