import axios from 'axios';

const notExist = 404;

async function apiRegister(register, token) {
  try {
    const url = 'http://localhost:3001/adminRegister';
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchAPI = await axios.post(url, register, config);
    const response = await fetchAPI.data;
    return response;
  } catch (error) {
    return notExist;
  }
}

export default apiRegister;
