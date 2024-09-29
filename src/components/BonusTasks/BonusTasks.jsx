import React from 'react';
import '../WeeklyAgenda/WeeklyAgenda.css'; // Using the same CSS file

const BonusTasks = ({ bonusTasks }) => {

    return (
        <>
            <div className='weekly-agenda'>
                <div className='agenda-day'>
                    <div className="day-header">Bonus Tasks</div>
                    <ul className="task-list">
                        {bonusTasks.length > 0 ? (
                            bonusTasks.map((task, index) => (
                                <li key={index} className="task-item">
                                    <div className="task-content">
                                        <div className="task-title">{task.title}</div>
                                        <div className="task-assigned">Points Value: {task.pointsValue}</div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="no-tasks">No bonus tasks available</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BonusTasks;