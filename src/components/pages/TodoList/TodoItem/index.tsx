import React, { FC, MouseEventHandler, MouseEvent } from 'react';
import { useAppDispatch } from '../../../../store';

// Actions
import { deleteTodo } from '../../../../store/todo/todo.actions';

// Types
import { ITodoItemProps } from './types';

// Styles
import styles from './TodoItem.module.scss';


const TodoItem: FC<ITodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className={styles['todo-item']}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default TodoItem;