import { DATATYPE } from '../constants'
const todos = (state = [], action) => {
    switch (action.type) {
        case DATATYPE.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id, 
                    text: action.text,
                    completed: false
                }
            ]
        case DATATYPE.SET_VISIBILITY_FILTER:
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo,completed:!todo.completed}
                : todo    
            )    
        case DATATYPE.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                ? {...todo,completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}
export default todos