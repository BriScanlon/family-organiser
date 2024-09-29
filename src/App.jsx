import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeeklyAgenda from './components/WeeklyAgenda';

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
            { time: "09:00", task: "Brian - Bloc Digital"},
            { time: "19:30", task: "Evelyn - Rehearsal" }
          ],
          "01/10/2024": [
            { time: "12:00", task: "Brian - Uni"}
          ]
        }}
      />
    </>
  )
}

export default App
