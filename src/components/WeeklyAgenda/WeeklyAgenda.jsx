import React from 'react';
import './WeeklyAgenda.css';

const WeeklyAgenda = ({ tasksByDay }) => {
  // Generate the next 7 days
  console.log('Tasks by day: ', JSON.stringify(tasksByDay));


  const today = new Date();
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return {
      day: date.toLocaleString('default', { weekday: 'long' }),
      date: date.toLocaleDateString('en-GB'),
    };
  });

  return (
    <div className="weekly-agenda">
      {daysOfWeek.map((dayInfo, index) => (
        <div key={index} className="agenda-day">
          <div className="day-header">
            <span className="day">{dayInfo.day}</span>
            <span className="date">{dayInfo.date}</span>
          </div>
          <ul className="task-list">
            {tasksByDay[dayInfo.date]?.length > 0 ? (
              // Sort tasks by time before rendering
              tasksByDay[dayInfo.date]
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((taskObj, idx) => (
                  <li key={idx} className="task-item">
                    <span className="task-time">{taskObj.time}</span> {taskObj.task}
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
