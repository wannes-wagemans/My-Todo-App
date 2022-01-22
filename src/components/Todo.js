import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToList } from "../actions";
import TodoItem from "./TodoItem";
import Button from 'react-bootstrap/Button';
import { Form, FormControl, FormGroup, FormText } from "react-bootstrap";

function Todo() {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    listInput !== "" &&
      dispatch(addToList({ text: listInput, color: color }))
    setListInput('')
  }

  const handleInput = (event) => {
    setListInput(event.target.value)
  }

  const handleColor = (event) => {
    setColor(event.target.value)
  }

  const list = useSelector(state => state.list)

  const [listInput, setListInput] = useState("");
  const [color, setColor] = useState("#000000")

  return (
    <div className="m-4">
      <Form >
        <FormText>
          <FormControl size="lg" type="input" placeholder="To do" value={listInput} onChange={handleInput} />
        </FormText>
        <FormGroup className="d-flex my-2 justify-content-between">
          <Button type="submit" onClick={handleSubmit}>Add Todo</Button>
          <FormControl
            type="color"
            id="exampleColorInput"
            defaultValue={color}
            onChange={handleColor}
            title="Choose your color"
          />
        </FormGroup>
      </Form>

      {list.map((item) => {
        return (
          <TodoItem text={item.text} key={item.id} color={item.color} completed={item.completed} id={item.id} />
        )
      })}
    </div>
  );
}

export default Todo;
