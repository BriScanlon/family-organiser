import React, { useState } from 'react';
import './WeeklyAgenda.css';

const WeeklyAgenda = ({ tasksByDay }) => {
    const today = new Date();
    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        return {
            day: date.toLocaleString('default', { weekday: 'long' }),
            date: date.toLocaleDateString('en-GB'),
        };
    });

    // Track hovered day and task
    const [hoveredDay, setHoveredDay] = useState(null);
    const [hoveredTask, setHoveredTask] = useState(null);

    return (
        <div className="weekly-agenda">
            {daysOfWeek.map((dayInfo, dayIndex) => (
                <div
                    key={dayIndex}
                    className="agenda-day"
                    onMouseEnter={() => setHoveredDay(dayIndex)}
                    onMouseLeave={() => { setHoveredDay(null); setHoveredTask(null); }}
                    onTouchStart={() => setHoveredDay(dayIndex)}
                >
                    <div className="day-header">
                        <span className="date">{dayInfo.date}</span>
                    </div>
                    <ul className="task-list">
                        {tasksByDay[dayInfo.date]?.length > 0 ? (
                            tasksByDay[dayInfo.date]
                                .sort((a, b) => a.time.localeCompare(b.time))
                                .map((taskObj, taskIdx) => (
                                    <li
                                        key={taskIdx}
                                        className="task-item"
                                        style={{ backgroundColor: taskObj.color }}  // Apply the background color
                                        onMouseEnter={() => setHoveredTask(taskIdx)}
                                        onMouseLeave={() => setHoveredTask(null)}
                                        onTouchStart={() => setHoveredTask(taskIdx)}
                                    >
                                        <span className="task-time">{taskObj.time}</span>

                                        {/* Pop-over shows only if this task is hovered */}
                                        {hoveredDay === dayIndex && hoveredTask === taskIdx && (
                                            <div className="popover">
                                                <div className="popover-time">{taskObj.time}</div>
                                                <div className="popover-person">Person: {taskObj.person}</div>
                                                <div className="popover-task">{taskObj.task}</div>
                                            </div>
                                        )}
                                    </li>
                                ))
                        ) : (
                            <li className="no-tasks">No tasks</li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default WeeklyAgenda;
