import axios from 'axios';

const API_KEY = 'AIzaSyCuGED8ue3yqxHRKGPhyVTNl8oftMIYDgE';

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, { email, password });

  const data = {
    email: response.email,
    token: response.data.idToken,
  };

  return data;
};

export const login = (email, password) => {
  return authenticate('signInWithPassword', email, password);
};
