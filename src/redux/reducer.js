import { combineReducers } from 'redux'
import { VisibilityFilters } from './actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: action.id,
          text: action.text,
          checked: false
        }, ...state
      ]
    case 'CHECK_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, checked: !todo.checked}
          : todo
      )
    case 'DELETE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, deleted: !todo.deleted}
          : todo
      )
    default:
      return state
  }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  todos,
  visibilityFilter
})