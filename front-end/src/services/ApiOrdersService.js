import axios from 'axios';

const getOrders = async () => {
  try {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const url = `http://localhost:3001/customer/order/${id}`;
    const fetchAPI = await axios.get(url);
    const response = await fetchAPI.data;
    console.log(response);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default getOrders;
