import React from 'react'
import { checkTodo, deleteTodo } from '../redux/actions'
import { connect } from 'react-redux'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
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
      deleted: !this.props.deleted,
      id: !this.props.id
    })
  }

  render() {
    return (
      <li>
        <input id={this.state.id} type="checkbox" checked={this.state.checked} onChange={this.handleCheck} />
        <label for={this.state.id}>{this.state.text}</label>
        <button deleted={this.state.deleted} onClick={this.handleDelete}>X</button>
      </li>
    )
  }
}

export default connect()(Todo)
