import { configureStore } from '@reduxjs/toolkit';
import { todoReduser } from './slises/todoSlise';

export const store = configureStore({
  reducer: {
    todos: todoReduser,
  },
});
