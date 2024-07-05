// const Authentication = () => {
//   console.log('auth');
// };

import axios from 'axios';

const API_KEY = 'AIzaSyCuGED8ue3yqxHRKGPhyVTNl8oftMIYDgE';

export const login = (email, password) => {
  let mode = 'signInWithPassword';
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const register = (email, password) => {
  let mode = 'signUp';
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};
