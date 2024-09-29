import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeeklyAgenda from './components/WeeklyAgenda';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeeklyAgenda
        tasksByDay={{
          "29/09/2024": [
            { time: "17:00", task: "Family Dinner" },
          ],
          "30/09/2024": [
            { time: "09:00", task: "Brian - Bloc Digital" },
            { time: "19:30", task: "Evelyn - Rehearsal" }
          ],
          "01/10/2024": [
            { time: "12:00", task: "Brian - Uni" }
          ]
        }} />

      <ToDoList
        tasks={[
          {
            assignedTo: 'Daddy',
            title: 'Clean out the Guinea Pigs',
            deadline: '2024-09-30T14:00',
            priority: 3,
          },
          {
            assignedTo: 'Evelyn',
            title: 'Homework',
            deadline: '2024-09-29T16:00',
            priority: 1,
          },
          {
            assignedTo: 'Rafe',
            title: 'Homework',
            deadline: '2024-09-29T16:00',
            priority: 1,
          },
        ]}
      />



    </>
  )
}

export default App
