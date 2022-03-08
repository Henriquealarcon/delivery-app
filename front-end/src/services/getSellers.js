import axios from 'axios';

const notExist = 404;
async function getSellers() {
  try {
    const url = 'http://localhost:3001/register';

    const fetchAPI = await axios.get(url);
    const response = await fetchAPI.data;
    return response;
  } catch (error) {
    return notExist;
  }
}

export default getSellers;
