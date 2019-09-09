let todoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: todoId++,
  text
})

export const checkTodo = id => ({
  type: 'CHECK_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  DELETED: 'DELETED,'
}