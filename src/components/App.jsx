import { TodoForm } from './TodoForm/TodoForm';
import { TaskList } from './taskList/TaskList';
import { useSelector } from 'react-redux';
import { Container } from './Container';
import { Text } from './Text';
import { Title } from './Title';

export const App = () => {
  const todos = useSelector(state => state.todos.todo);

  return (
    <div>
      <Container>
        <Title>Твой список дел</Title>
        <TodoForm />
        <TaskList />
        <Text fontSize={'15px'}>Сколько задач на сегодня: {todos.length}</Text>
      </Container>
    </div>
  );
};
