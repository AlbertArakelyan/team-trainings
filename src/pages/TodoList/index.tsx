import React from 'react';

// Components
import CreateForm from '../../components/pages/TodoList/CreateForm';

// Styles
import styles from './TodoList.module.scss';


const TodoList = () => {
  return (
    <div className={styles['todo-list']}>
      <div className="container">
        <div className={styles['todo-list__content']}>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};

export default TodoList;