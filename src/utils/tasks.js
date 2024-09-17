import axios from 'axios';

export const postTask = (task, user) => {
  const BASE_URL = 'https://api.tidymunchies.com/api';
  let data = {
    task: task.task,
    task_name: task.task_name,
  };

  try {
    axios.post(`${BASE_URL}/addTask`, data, {
      headers: {
        Authorization: `Bearer ${user.token} `,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
