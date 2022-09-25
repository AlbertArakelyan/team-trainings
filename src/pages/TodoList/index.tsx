import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';

// Components
import CreateForm from '../../components/pages/TodoList/CreateForm';
import TodoItem from '../../components/pages/TodoList/TodoItem';

// Actions
import { fetchTodos } from '../../store/todo/todo.actions';

// Styles
import styles from './TodoList.module.scss';


const TodoList = () => {
  const dispatch = useAppDispatch();

  const { list: todoList } = useAppSelector((state) => state.todo);
  console.log(todoList);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  
  const todoListContent = (
    todoList.map((todoItem) => {
      return (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          title={todoItem.title}
          completed={todoItem.completed}
        />
      );
    })
  );

  return (
    <div className={styles['todo-list']}>
      <div className="container">
        <div className={styles['todo-list__content']}>
          <CreateForm />
          <ul className={styles['todo-list__items']}>
            {todoListContent}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;