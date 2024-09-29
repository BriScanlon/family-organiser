import React from 'react';
import '../WeeklyAgenda/WeeklyAgenda2.css'; // Using the same CSS file

const ToDoList = ({ tasks }) => {
  // Sort tasks by priority in descending order
  const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);

  return (
    <div className="task-item">
      <div className="agenda-day">
        <div className="day-header">Outstanding Tasks</div>
        <ul className="task-list">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task, index) => (
              <li key={index} className="task-item">
                <div className="task-content">
                  <div className="task-title">{task.title}</div>
                  <div className="task-assigned">Assigned to: {task.assignedTo}</div>
                </div>
                <div className="task-deadline">
                  Deadline: {new Date(task.deadline).toLocaleString('en-GB', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })}
                </div>
                <div className="task-priority">Priority: {task.priority}</div>
              </li>
            ))
          ) : (
            <li className="no-tasks">No outstanding tasks</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
