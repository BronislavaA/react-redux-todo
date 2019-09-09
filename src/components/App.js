import React from 'react'
import AddTodo from '../containers/AddTodo'
import List from '../containers/ListFilter'

const App = () => (
  <div>
    <h2>To Do List</h2>
    <AddTodo />
    <List />
  </div>
)

export default App