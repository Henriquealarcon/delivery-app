import axios from 'axios';

const getSaleById = async (id) => {
  try {
    const url = `http://localhost:3001/customer/order/sales/${id}`;
    const fetchAPI = await axios.get(url);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return error.message;
  }
};

export default getSaleById;
