import { createAction } from '@reduxjs/toolkit';

// Action types
import { ADD_TODO } from './todo.actionTypes';

// Types
import { ITodo } from '../../types/todo';

export const addTodo = createAction<ITodo>(ADD_TODO);