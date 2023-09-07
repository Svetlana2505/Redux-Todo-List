import React from 'react';

import { TaskItem } from 'components/TaskItem/TaskItem';
import { useSelector } from 'react-redux';
import { List } from './TaskList.styled';

export const TaskList = () => {
  const tasks = useSelector(state => state.todos.todo);

  return (
    <List>
      {tasks.map(task => (
        <TaskItem {...task} key={task.id} />
      ))}
    </List>
  );
};
