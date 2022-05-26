import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/redux-redesers';
import './AddTodo.css';
const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  return (
    <section className="addTodo">
      <h2 className="title">Add Todo</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addTodo(todo));
        }}
      >
        <label className="addTodoLabel" htmlFor="todo">
          <div className="addTodoInputWrapper">
            {' '}
            <input
              className="addTodoInput"
              type="text"
              name="todo"
              required
              placeholder="Todo name"
              onChange={e => setTodo(e.target.value)}
              value={todo}
            />
            <button className="addTodoButton" type="submit">
              +
            </button>
          </div>
        </label>
      </form>
    </section>
  );
};

export default AddTodo;
