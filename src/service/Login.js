const axios = require("axios");

export function verifyEmail(email) {
  return axios({
    method: "get",
    url: "http://192.168.0.104:8080/user/email/" + email,
  });
}

export function loginUser(email, password) {
  return axios({
    method: "post",
    url: "http://192.168.0.104:8080/user/login",
    data: {
        email: email,
        password: password
    }
  });
}
