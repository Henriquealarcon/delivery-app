import axios from 'axios';

const getOrders = async () => {
  try {
    const url = 'http://localhost:3001/customer/order';
    // const { token } = JSON.parse(localStorage.getItem('user'));
    const fetchAPI = await axios.get(url);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return error.message;
  }
};

export default getOrders;