import React, { useState } from 'react';
import moment from 'moment';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [priority, setPriority] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the due date is in the future
        const now = moment();
        const formDueDate = moment(dueDate);
        if (formDueDate.isBefore(now)) {
            alert('Please select a valid due date (in the future).');
            return;
        }

        // Console log the form data
        console.log({
            title,
            assignedTo,
            dueDate: dueDate.toISOString(),
            priority,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <label htmlFor="assignedTo">Assigned To:</label>
            <select
                id="assignedTo"
                name="assignedTo"
                value={assignedTo}
                onChange={(event) => setAssignedTo(event.target.value)}
            >
                <option value="Evelyn">Evelyn</option>
                <option value="Daddy">Daddy</option>
                <option value="Mummy">Mummy</option>
                <option value="Rafe">Rafe</option>
            </select>
            <br />
            <label htmlFor="dueDate">Due Date:</label>
            <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={dueDate.toISOString().split('T')[0]}
                onChange={(event) => setDueDate(new Date(event.target.value))}
            />
            <br />
            <label htmlFor="priority">Priority:</label>
            <input
                type="number"
                id="priority"
                name="priority"
                value={priority}
                min="1"
                step="1"
                onChange={(event) => setPriority(parseInt(event.target.value))}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;