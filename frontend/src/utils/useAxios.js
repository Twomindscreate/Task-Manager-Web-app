import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://127.0.0.1:8000/api/";
const useAxios = () => {
  const { authtokens, setUser, setAuthTokens } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${authtokens?.access}`,
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const use = jwtDecode(authtokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) return req;

    const response = await axios.post("${baseURL}/token/refresh/", {
      refresh: authtokens.refresh,
    });
    localStorage.setItem("authtokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwtDecode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
