import React from 'react'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline"><img src="" /> To-Do App</h1>
      <div className="important-task-list">
        <h2>Important</h2>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
        </ul>
        <div className="task-list">
          <h2>Tasks</h2>
          <ul>
            <li>Task 3</li>
            <li>Task 4</li>
          </ul>
        </div>
      </div>
      <footer className="footer">
        <input type="text" placeholder="What do you need to do?" /><button>+ Add</button>
      </footer>
    </>
  )
}

export default App
