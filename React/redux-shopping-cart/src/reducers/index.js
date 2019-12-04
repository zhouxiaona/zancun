import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter' 
import count from './count'
import list from './list'
const todoApp = combineReducers({
    todos,
    visibilityFilter,
    count,
    list
})
export default todoApp
