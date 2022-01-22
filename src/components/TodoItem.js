import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteToList, toggleToList } from '../actions';

function TodoItem({ text, color, completed, id }) {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteToList(id))
  }

  const handleClick = () => {
    dispatch(toggleToList(id))
  }

  const className = `${completed ? "bg-success text-white" : "bg-white text-secondary"} shadow rounded my-3 d-flex gap-2 align-items-center p-2`

  return (
    <div className={className}>
      <input className="form-check-input" type="checkbox" value="" id="checkbox" onChange={handleClick} checked={completed} />
      <div className='d-flex justify-content-between flex-grow-1 align-items-center ps-3 ms-2' style={{ borderLeft: `6px solid ${color}` }}>
        <label className="form-check-label" htmlFor="checkbox">
          <h3>{text}</h3>
        </label>
        <Button className='btn-danger' onClick={handleDelete}>X</Button>
      </div>
    </div>
  );
}

export default TodoItem;
