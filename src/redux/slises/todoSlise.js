import { createSlice } from '@reduxjs/toolkit';

export const todoSlise = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.push({
        id: Math.random(),
        task: payload,
        completed: false,
      });
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter(task => task.id !== payload.id);
    },
    toggleTodo: (state, { payload }) => {
      const toggle = state.todo.find(el => el.id === payload.id);
      toggle.completed = !toggle.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlise.actions;

export const todoReduser = todoSlise.reducer;
