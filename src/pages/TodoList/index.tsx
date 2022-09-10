import React from 'react';
import { useAppSelector } from '../../store';

// Components
import CreateForm from '../../components/pages/TodoList/CreateForm';
import TodoItem from '../../components/pages/TodoList/TodoItem';

// Styles
import styles from './TodoList.module.scss';


const TodoList = () => {
  const { list: todoList } = useAppSelector((state) => state.todo);
  console.log(todoList);
  
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