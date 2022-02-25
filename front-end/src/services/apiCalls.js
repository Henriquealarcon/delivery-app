import axios from 'axios';

const getProducts = async () => {
  try {
    const url = 'http://localhost:3001/customer/products';
    const { token } = JSON.parse(localStorage.getItem('userData'));
    const fetchAPI = await axios.get(url, { headers: {
      // eslint-disable-next-line
      Authorization: token,
    },
    });
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return error.message;
  }
};

export default getProducts;
