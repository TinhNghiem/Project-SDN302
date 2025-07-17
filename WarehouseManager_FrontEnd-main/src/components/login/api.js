import axios from "../../services/axios.customize";

const loginAPI = (username, password) => {
  return axios.post("/login", {
    username,
    password,
  });
};

const accountFromTokenAPI = () => {
  const URL_BACKEND = "login/accounts";
  return axios.get(URL_BACKEND);
};
const logoutAPI = () => {
  const URL_BACKEND = "logout";
  return axios.post(URL_BACKEND);
};
export { loginAPI, logoutAPI, accountFromTokenAPI };
