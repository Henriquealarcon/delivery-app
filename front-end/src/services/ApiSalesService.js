import axios from 'axios';

const getSaleById = async (id) => {
  try {
    const url = 'http://localhost:3001/customer/order';
    const { token } = JSON.parse(localStorage.getItem('user'));
    const fetchAPI = await axios.get(url, { params: { id } }, { headers: {
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

export default getSaleById;
