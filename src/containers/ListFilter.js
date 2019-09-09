import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../redux/actions'

const viewList = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos.filter(t => !t.deleted)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: viewList(state.todos, state.visibilityFilter)
})

export default connect(
  mapStateToProps,
  null
)(TodoList)
