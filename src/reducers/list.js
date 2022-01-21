
const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        color: action.payload.color,
        completed: false,
      }]
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload)
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

export default listReducer