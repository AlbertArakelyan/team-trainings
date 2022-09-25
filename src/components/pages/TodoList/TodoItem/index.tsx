import React, { FC, PropsWithChildren } from 'react';
import { useAppDispatch } from '../../../../store';

// Actions
import { deleteTodo, toggleTodo } from '../../../../store/todo/todo.actions';

// Types
import { ITodoItemProps } from './types';

// Styles
import styles from './TodoItem.module.scss';


const TodoItem: FC<ITodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li className={styles['todo-item']}>
      <input onChange={handleToggle} type="checkbox" checked={completed} />
      <span className={`${styles['todo-item__title']} ${completed ? styles['todo-item__title--completed'] : ''}`}>{title}</span>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default TodoItem;