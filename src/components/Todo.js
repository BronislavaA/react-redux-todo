import React from 'react'
import { checkTodo, deleteTodo } from '../redux/actions'
import { connect } from 'react-redux'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text,
      checked: this.props.checked,
      deleted: this.props.deleted
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleCheck() {
    this.props.dispatch(checkTodo(this.props.id))
    this.setState({
      checked: !this.props.checked
    })
  }
  handleDelete() {
    this.props.dispatch(deleteTodo(this.props.id))
    this.setState({
      deleted: !this.props.deleted
    })
  }

  render() {
    return (
      <ul>
        <li>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheck}
          />
          {this.state.text}
          <button deleted={this.state.deleted} onClick={this.handleDelete}>X</button>
        </li>
      </ul>
    )
  }
}

export default connect()(Todo)
