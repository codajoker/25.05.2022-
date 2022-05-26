import AddTodo from './AddTodo/AddTodo';
import Navigate from './Navigate/Navigate';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodo, refresh } from 'redux/redux-redesers';
import db from '../db.json';
import MyContacts from './MyTodos/MyTodos';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
    // dispatch(fetchTodo(db));

    return () => {
      dispatch(fetchTodo(db));
    };
  }, [dispatch]);

  return (
    <>
      <Navigate />
      <div className="container">
        <h1>Todo App</h1>
        <div className="wrapperMain">
          <AddTodo />
          <MyContacts />
        </div>
      </div>
      <></>
    </>
  );
};
