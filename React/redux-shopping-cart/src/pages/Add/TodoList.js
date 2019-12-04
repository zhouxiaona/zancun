import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import {toggleTodo} from '../../actions'

class TodoList extends React.Component{
  render(){
    const {todos, onTodoClick} = this.props
    return (
        <ul>
          {todos && todos.map((todo, index) => {
            return (
              <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
            )
          })}
        </ul>
    )
  }
}
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
      case 'SHOW_ALL':
          return todos;
      case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed);
      default:
          return todos;        
  }
}

const mapStateToProps = state => {
  return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onTodoClick: id => {
          dispatch(toggleTodo(id))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


