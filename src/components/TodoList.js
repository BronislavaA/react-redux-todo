import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => (
            <Todo key={todo.id} {...todo} actions={this.props.actions}/>
          ))
        }
      </ul>
    )
  }
}
export default TodoList

