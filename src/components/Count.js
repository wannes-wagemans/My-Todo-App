import React from 'react';
import { useSelector } from 'react-redux';

function Count() {

  let completedTasks = 0

  const todoList = useSelector(state => state.list)

  const countFunction = todoList.map(item => {
    if (item.completed) {
      return completedTasks += 1
    } else return completedTasks
  })

  const allTasks = todoList.length

  const className = `m-4 d-flex justify-content-between ${completedTasks !== allTasks || allTasks === 0 ? 'bg-white text-secondary' : 'bg-success text-white'} shadow rounded p-4 fixed-bottom zindex-fixed`

  return (
    <div className={className}>
      <h3>Number of completed tasks:</h3>
      <h2>{completedTasks}/{allTasks}</h2>
    </div>
  );
}

export default Count;
