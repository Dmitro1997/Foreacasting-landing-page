import {combineReducers} from 'redux';


function todos(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.text])
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    todos: todos
})

export default rootReducer