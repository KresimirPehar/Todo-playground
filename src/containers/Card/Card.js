import React from 'react';
import { CardContainer, Title, Header, Tasks } from './Card.style';
import Task from '../Task';

const Card = ({
  title,
  Icon,
  onIconClick,
  tasks,
  onEditTask,
  onDoneUndoneTask,
  onDeleteTask
}) => {
  return (
    <CardContainer>
      <Header>
        <Title>{title}</Title>
        <Icon onClick={onIconClick} />
      </Header>
      <Tasks>
        {tasks &&
          Object.keys(tasks).map(task => (
            <Task
              key={tasks[task].id}
              id={tasks[task].id}
              value={tasks[task]}
              onEdit={onEditTask}
              onDoneUndone={onDoneUndoneTask}
              onDelete={onDeleteTask}
              title={title}
            />
          ))}
      </Tasks>
    </CardContainer>
  );
};

export default Card;
