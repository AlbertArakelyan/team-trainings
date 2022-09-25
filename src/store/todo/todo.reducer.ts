import { createReducer } from '@reduxjs/toolkit';

// Actions
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  fetchTodos,
} from './todo.actions';

// Types
import { ITodoState } from './types';


const initialState: ITodoState = {
  list: [],
  loading: false,
  error: false,
};

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.list.push(action.payload);
    })
    .addCase(deleteTodo, (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const toggledTodo = state.list.find((item) => item.id === action.payload);

      if(toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    })

    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = [...action.payload, ...state.list];
      state.error = false;
      state.loading = false;
    })
    .addCase(fetchTodos.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
    .addCase(fetchTodos.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })

    .addDefaultCase((state) => state);
});

export default todoReducer;