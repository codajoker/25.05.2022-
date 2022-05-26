import { useDispatch, useSelector } from 'react-redux';
import { changeComplated } from 'redux/redux-redesers';
import './TodoList.css';
const TodoList = () => {
  const arrayTodos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todos.filter);
  const searchButton = useSelector(state => state.todos.searchButton);

  const search = array => {
    return array.filter(todo =>
      todo.title.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterArray = completed => {
    if (completed === 'all') {
      return search(arrayTodos);
    }
    if (completed === 'done') {
      return search(arrayTodos.filter(todo => todo.completed));
    }
    if (completed === 'notDone') {
      return search(arrayTodos.filter(todo => !todo.completed));
    }
  };
  return (
    <>
      <ul className="todoList">
        {filterArray(searchButton).map((todo, index) => (
          <li className="todListItem" key={todo.id}>
            <p>{todo.title}</p>{' '}
            <input
              checked={todo.completed}
              onChange={() => dispatch(changeComplated(index))}
              className="react-switch-checkbox"
              id={todo.id}
              type="checkbox"
            />
            <label
              style={{
                background: todo.completed && 'rgba(0, 179, 219, 0.12)',
              }}
              className="react-switch-label"
              htmlFor={todo.id}
            >
              <span className={`react-switch-button`} />
            </label>
          </li>
        ))}
      </ul>
      <div className="blur"></div>
    </>
  );
};

export default TodoList;
