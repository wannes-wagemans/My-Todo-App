import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToList, toggleToList } from './actions';

function TodoItem({ text, color, completed, id }) {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteToList(id))
  }

  const handleClick = () => {
    dispatch(toggleToList(id))
  }

  return (
    <div className='bg-white shadow rounded my-3 d-flex gap-2 align-items-center p-2'>
      <input className="form-check-input" type="checkbox" value="" id="checkbox" onChange={handleClick} checked={completed} />
      <div className='d-flex justify-content-between flex-grow-1 align-items-center ps-2' style={{ borderLeft: `4px solid ${color}` }}>
        <label className="form-check-label" htmlFor="checkbox">
          {text}
        </label>
        <Button className='btn-danger' onClick={handleDelete}>X</Button>
      </div>
    </div>
  );
}

export default TodoItem;
