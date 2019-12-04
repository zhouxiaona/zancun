import { DATATYPE } from '../constants'
let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: DATATYPE.ADD_TODO,
        id: nextTodoId,
        text
    }
}
export const setVisibilityFilter = filter => {
    return {
        type: DATATYPE.SET_VISIBILITY_FILTER,
        filter
    }
}
export const toggleTodo = id => {
    return {
        type: DATATYPE.TOGGLE_TODO,
        id
    }
}
export const add = () => {
    return {
        type: DATATYPE.ADD
    }
}
export const dec = () => {
    return {
        type: DATATYPE.DEC
    }
}
export const add_list = (data) => {
    return {
        type: DATATYPE.ADD_LIST,
        data: data
    }
}
export const del_list = (id) => {
    return {
        type: DATATYPE.DEL_LIST,
        id: id
    }
}
