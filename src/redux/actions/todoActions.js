import { ADD_NEW_TODO_TASK, EDIT_TASK, DONE_TASK } from './types';
import db from '../../db';

export const addNewTodoTask = () => dispatch => {
  const newTask = { text: '', done: false };
  db.table('todoList')
    .add(newTask)
    .then(id =>
      dispatch({
        type: ADD_NEW_TODO_TASK,
        payload: { id, ...newTask }
      })
    );
};

export const editTask = (newValue, id) => dispatch => {
  const updatedTask = { text: newValue };
  db.table('todoList')
    .update(id, updatedTask)
    .then(() =>
      dispatch({
        type: EDIT_TASK,
        payload: { id, ...updatedTask }
      })
    );
};

export const doneTask = id => dispatch => {
  const updatedTask = { done: true };
  db.table('todoList')
    .update(id, updatedTask)
    .then(() =>
      dispatch({
        type: DONE_TASK,
        payload: { id, ...updatedTask }
      })
    );
};
