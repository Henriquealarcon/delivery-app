import axios from 'axios';

const notExist = 404;
async function apiLogin(login) {
  try {
    const url = 'http://localhost:3001/login';

    const fetchAPI = await axios.post(url, login);
    const response = await fetchAPI.data.data;
    return response;
  } catch (error) {
    return notExist;
  }
}

export default apiLogin;
