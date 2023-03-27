import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;

// const instance = axios.create({
//   baseURL: "http://localhost:3001/api"
// });

// instance.interceptors.request.use(
// function(config) {
//   const token = localStorage.getItem("token"); 
//   if (token) {
//     config.headers["Authorization"] = 'Bearer ' + token;
//   }
//   return config;
// },
// function(error) {
//   return Promise.reject(error);
// }
// );

// export default instance;
