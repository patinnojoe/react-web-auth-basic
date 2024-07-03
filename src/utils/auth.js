// const Authentication = () => {
//   console.log('auth');
// };

import axios from 'axios';

const API_KEY = 'AIzaSyCuGED8ue3yqxHRKGPhyVTNl8oftMIYDgE';
let mode = 'signInWithPassword';
const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

export const login = (email, password) => {
  return axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};
