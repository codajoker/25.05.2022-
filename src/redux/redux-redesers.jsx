import { createSlice } from '@reduxjs/toolkit';
import db from '../db.json';
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    filter: '',
    todos: [...db],
    searchButton: 'all',
  },
  reducers: {
    fetchTodo(state, action) {
      state.todos = action.payload.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );
    },
    refresh(state) {
      state.todos = state.todos.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    addTodo(state, action) {
      state.todos = [
        {
          id: new Date().toISOString(),
          title: action.payload,
          completed: false,
        },
        ...state.todos,
      ];
    },
    changeSearchButton(state, action) {
      state.searchButton = action.payload;
    },
    changeComplated(state, action) {
      console.log(action.payload);
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
  },
});

export const {
  addTodo,
  changeFilter,
  fetchTodo,
  changeComplated,
  refresh,
  changeSearchButton,
} = todoSlice.actions;
