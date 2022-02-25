import axios from 'axios';

const notExist = 404;

async function apiRegister(register) {
  try {
    const url = 'http://localhost:3001/register';

    const fetchAPI = await axios.post(url, register);
    const response = await fetchAPI.data.data;
    return response;
  } catch (error) {
    return notExist;
  }
}

export default apiRegister;
