import axios from 'axios';

const BASE_URL = 'https://api.tidymunchies.com/api';

export const login = (email, password) => {
  let method = 'login';
  const url = `${BASE_URL}/${method}`;
  return axios.post(url, {
    email,
    password,
  });
};

export const register = (email, password, password_confirmation, username, name) => {
  let method = 'register';
  const url = `${BASE_URL}/${method}`;
  return axios.post(url, {
    email,
    password,
    password_confirmation,
    username,
    name,
  });
};
