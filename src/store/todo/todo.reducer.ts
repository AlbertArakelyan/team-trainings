import { createReducer } from '@reduxjs/toolkit';

// Actions
import { addTodo, deleteTodo } from './todo.actions';

// Types
import { ITodoState } from './types';


const initialState: ITodoState = {
  list: [],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.list.push(action.payload);
    })
    .addCase(deleteTodo, (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    })
    .addDefaultCase((state) => state);
});

export default todoReducer;