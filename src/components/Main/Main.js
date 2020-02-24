import React from 'react';
import { MdAddBox, MdDeleteSweep } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import TodoListImg from '../../assets/TodoList.svg';
import { MainContainer, Title, Image, Lists } from './Main.style';
import Card from '../../containers/Card';
import { addNewTodoTask, editTask } from '../../redux/actions/todoActions';

const Main = () => {
  const dispatch = useDispatch();
  const todoTasks = useSelector(state => state.todoTasks);

  const doneTasks = Object.keys(todoTasks.byId)
    .filter(key => todoTasks.byId[key].done === true)
    .reduce((obj, key) => {
      const doneTasks = obj;
      doneTasks[key] = todoTasks.byId[key];
      return doneTasks;
    }, {});

  const onAddTask = () => dispatch(addNewTodoTask());
  const onEditTask = (newValue, id) => dispatch(editTask(newValue, id));

  return (
    <MainContainer>
      <Title>
        <h1>Manage your to do list</h1>
        <h4>Click on checkbox or drag and drop to done</h4>
      </Title>
      <Image src={TodoListImg} alt='todoList' />
      <Lists>
        <Card
          title='To do'
          Icon={MdAddBox}
          onIconClick={onAddTask}
          onEdit={onEditTask}
          tasks={todoTasks.byId}
        />
        <Card title='Done' Icon={MdDeleteSweep} tasks={doneTasks} />
      </Lists>
    </MainContainer>
  );
};

export default Main;
