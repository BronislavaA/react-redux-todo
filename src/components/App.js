import React from 'react'
import AddTodo from '../containers/AddTodo'
import List from '../containers/ListFilter'

const App = () => (
  <div className="app">
    <div className="card">
      <div className="card-header">
        <h1>To Do List</h1>
      </div>
      <div className="card-content">
        <List />
        <AddTodo />
      </div>
    </div>
  </div>
)

export default App