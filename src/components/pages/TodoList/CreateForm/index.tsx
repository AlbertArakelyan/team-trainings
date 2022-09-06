import React, {
  useState,
  ChangeEventHandler,
  ChangeEvent,
  FormEventHandler,
  FormEvent
} from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../../../store';

// Actions
import { addTodo } from '../../../../store/todo/todo.actions';


const CreateForm = () => {
  const dispatch = useAppDispatch();

  const { list: todoList } = useAppSelector((state) => state.todo);
  console.log(todoList);
  
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo({
      id: nanoid(),
      value,
      done: false,
    }));
  };

  // Effect

  // Content

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
};

export default CreateForm;