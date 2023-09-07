import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/slises/todoSlise';
import { toggleTodo } from 'redux/slises/todoSlise';
import { Item, Button } from './TaskItem.styled';

export const TaskItem = ({ task, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <input
        style={{ marginRight: '10px' }}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : '',
          color: '#000',
        }}
      >
        {task}
      </span>
      <Button>
        <RxCross2 onClick={() => dispatch(deleteTodo({ id }))} />
      </Button>
    </Item>
  );
};
