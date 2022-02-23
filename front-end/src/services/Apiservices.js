const apiLogin = async ({ email, password }) => {
  fetch('https://localhost:3001/delivery-app-dev/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default apiLogin;
