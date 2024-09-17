import axios from 'axios';
const BASE_URL = 'https://api.tidymunchies.com/api';

export const postTask = (task, user) => {
  let data = {
    task: task.task,
    task_name: task.task_name,
    task_status: 'task_added',
    user_id: user.userId,
  };

  return axios.post(`${BASE_URL}/addTask`, data, {
    headers: {
      Authorization: `Bearer ${user.token} `,
    },
  });
};

export const getAllTask = (user) => {
  console.log(user);
  return axios.get(`${BASE_URL}/allTask`, {
    headers: {
      Authorization: `Bearer ${user.token} `,
    },
  });
};

export const updateTask = async (task, user, status) => {
  const data = {
    id: task.id,
    task_status: status,
  };
  try {
    const res = await axios.post(`${BASE_URL}/updateTask`, data, {
      headers: {
        Authorization: `Bearer ${user.token} `,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// FIX ANALYTICS
export const getUserAnalysis = (user) => {
  return axios.get(`${BASE_URL}/getUserAnalysis`, {
    headers: {
      Authorization: `Bearer ${user.token} `,
    },
  });
};

export const getGeneralAnalytics = (user) => {
  return axios.get(`${BASE_URL}/getGeneralAnalysis`, {
    headers: {
      Authorization: `Bearer ${user.token} `,
    },
  });
};
// PUSH
