import axios from "axios";

const authaxiosinstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
  headers: {
    "Accept-Language": "en",
  },
});

authaxiosinstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default authaxiosinstance;