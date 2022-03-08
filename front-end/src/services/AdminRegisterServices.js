import axios from 'axios';

const conflict = 409;

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
    return conflict;
  }
}

export default apiRegister;
