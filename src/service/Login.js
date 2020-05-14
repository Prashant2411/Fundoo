const axios = require("axios");

export function verifyEmail(email) {
  return axios({
    method: "get",
    url: "http://localhost:8080/user/email/" + email,
  });
}

export function loginUser(email, password) {
  return axios({
    method: "post",
    url: "http://localhost:8080/user/login",
    data: {
        email: email,
        password: password
    }
  });
}
