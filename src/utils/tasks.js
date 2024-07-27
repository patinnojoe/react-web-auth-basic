import axios from 'axios';

export const postTask = (task) => {
  task.taskDateAdded = new Date().toDateString();
  console.log(task);

  axios.post();
};
