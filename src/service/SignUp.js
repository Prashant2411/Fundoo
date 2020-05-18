const axios = require("axios");

export function registerUser(
  firstName,
  lastName,
  email,
  password,
  mobileNumber,
  age
) {
  return axios({
    method: "post",
    url: "http://192.168.0.104:8080/user/register",
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      mobileNumber: mobileNumber,
      age: age,
    },
  });
}

export function isEmailAvailable(email) {
  return axios({
    method: "get",
    url: "http://192.168.0.104:8080/user/email-availability/" + email,
  });
}