import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/slises/todoSlise';
import { Button, Input } from './TodoForm.styled';

export const TodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo(value));
    }

    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Input value={value} onChange={e => setValue(e.target.value)} />
      <Button>Добавить</Button>
    </form>
  );
};

// export const TodoForm = () => {
//   const [value, setValue] = useState('');
//   const dispatch = useDispatch();

//   const onSubmit = e => {
//     e.preventDefault();
//     if (value) {
//       dispatch(addTodo(value));
//     }

//     setValue('');
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input value={value} onChange={e => setValue(e.target.value)} />
//       <button>add</button>
//     </form>
//   );
// };
