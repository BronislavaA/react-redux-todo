import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text !== '')
    {
      this.props.dispatch(addTodo(this.state.text))
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <div className="addTodo">
        <input name="input" type="text" value={this.state.text} onChange={this.handleChange} />
        <button name="submit" type="button" onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default connect()(AddTodo)