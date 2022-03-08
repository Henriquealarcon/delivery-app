import axios from 'axios';

const postProductsSolds = async (order) => {
  try {
    const url = 'http://localhost:3001/customer/order';

    const { token } = JSON.parse(localStorage.getItem('user'));

    const fetchAPI = await axios.post(url, order, { headers: { authorization: token } });
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return error.message;
  }
};

export default postProductsSolds;
