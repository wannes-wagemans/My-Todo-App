export const addToList = (text) => {
  return {
    type: 'ADD_TODO',
    payload: text
  }
}

export const deleteToList = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}

export const toggleToList = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}