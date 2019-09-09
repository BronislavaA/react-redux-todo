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
      <form onSubmit={this.handleSubmit}>
        <input name="input" type="text" value={this.state.text} onChange={this.handleChange} />
        <input name="submit" type="submit" value="Add" />
      </form>
    );
  }
}

export default connect()(AddTodo)