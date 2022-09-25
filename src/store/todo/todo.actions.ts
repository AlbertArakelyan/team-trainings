import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Services
import Todo from '../../services/Todo';

// Action types
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS
} from './todo.actionTypes';

// Types
import { ITodo } from '../../types/todo';

export const addTodo = createAction<ITodo>(ADD_TODO);
export const deleteTodo = createAction<string>(DELETE_TODO);
export const toggleTodo = createAction<string>(TOGGLE_TODO);

export const fetchTodos = createAsyncThunk<ITodo[]>(
  FETCH_TODOS,
  async () => {
    try {
      const response = await Todo.getTodos<ITodo[]>();

      if (!response.data) {
        throw new Error('Something went wrong.');
      }

      return response.data;
    } catch (e: any) {
      alert(e.message);
      throw e.message;
    }
  },
);