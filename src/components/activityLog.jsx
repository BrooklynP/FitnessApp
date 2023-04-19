import React from 'react';

function ActivityLog({ activities }) {
    const activityLogList = activities.map((activityLogItem, index) =>
        <li key={index}>{activityLogItem}</li>
    )

    return <ul>{activityLogList}</ul>
}

export default ActivityLog;